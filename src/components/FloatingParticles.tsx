"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  type: "star" | "heart" | "sparkle";
  hue: number;
  rot: number;
  rotSpeed: number;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particles: Particle[] = [];
    const particleCount = Math.min(65, Math.floor(width / 22));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 1.5,
        speedY: -(Math.random() * 0.45 + 0.15),
        speedX: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.65 + 0.2,
        type: Math.random() > 0.65 ? "heart" : Math.random() > 0.4 ? "star" : "sparkle",
        hue: Math.random() > 0.5 ? 345 : 45, // rose pink or warm champagne gold
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    const drawHeart = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      opacity: number,
      rot: number
    ) => {
      context.save();
      context.translate(x, y);
      context.rotate(rot);
      context.beginPath();
      const topCurveHeight = size * 0.3;
      context.moveTo(0, topCurveHeight);
      // top left curve
      context.bezierCurveTo(-size / 2, -topCurveHeight, -size, topCurveHeight / 2, 0, size);
      // top right curve
      context.bezierCurveTo(size, topCurveHeight / 2, size / 2, -topCurveHeight, 0, topCurveHeight);
      context.fillStyle = `rgba(244, 63, 94, ${opacity * 0.55})`;
      context.shadowColor = "rgba(251, 113, 133, 0.6)";
      context.shadowBlur = 10;
      context.fill();
      context.restore();
    };

    const drawStar = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      opacity: number
    ) => {
      context.save();
      context.beginPath();
      context.arc(x, y, size * 0.6, 0, Math.PI * 2);
      context.fillStyle = `rgba(254, 240, 138, ${opacity})`;
      context.shadowColor = "rgba(250, 204, 21, 0.8)";
      context.shadowBlur = 8;
      context.fill();
      context.restore();
    };

    const drawSparkle = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      opacity: number,
      rot: number
    ) => {
      context.save();
      context.translate(x, y);
      context.rotate(rot);
      context.beginPath();
      for (let i = 0; i < 4; i++) {
        context.lineTo(Math.cos((i * Math.PI) / 2) * size * 1.6, Math.sin((i * Math.PI) / 2) * size * 1.6);
        context.lineTo(
          Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3),
          Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3)
        );
      }
      context.closePath();
      context.fillStyle = `rgba(255, 228, 230, ${opacity * 0.75})`;
      context.shadowColor = "rgba(255, 255, 255, 0.7)";
      context.shadowBlur = 6;
      context.fill();
      context.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.rot += p.rotSpeed;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        if (p.type === "heart") {
          drawHeart(ctx, p.x, p.y, p.size * 2.2, p.opacity, p.rot);
        } else if (p.type === "star") {
          drawStar(ctx, p.x, p.y, p.size, p.opacity);
        } else {
          drawSparkle(ctx, p.x, p.y, p.size, p.opacity, p.rot);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
