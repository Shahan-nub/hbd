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
    const particleCount = Math.min(50, Math.floor(width / 26));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3.5 + 1.2,
        speedY: -(Math.random() * 0.4 + 0.12),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        type: Math.random() > 0.65 ? "heart" : Math.random() > 0.35 ? "sparkle" : "star",
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
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
      context.bezierCurveTo(-size / 2, -topCurveHeight, -size, topCurveHeight / 2, 0, size);
      context.bezierCurveTo(size, topCurveHeight / 2, size / 2, -topCurveHeight, 0, topCurveHeight);
      context.fillStyle = `rgba(197, 164, 126, ${opacity * 0.45})`;
      context.shadowColor = "rgba(215, 190, 159, 0.4)";
      context.shadowBlur = 6;
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
      context.arc(x, y, size * 0.55, 0, Math.PI * 2);
      context.fillStyle = `rgba(216, 173, 108, ${opacity * 0.6})`;
      context.shadowColor = "rgba(238, 216, 182, 0.5)";
      context.shadowBlur = 6;
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
        context.lineTo(Math.cos((i * Math.PI) / 2) * size * 1.5, Math.sin((i * Math.PI) / 2) * size * 1.5);
        context.lineTo(
          Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.28),
          Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.28)
        );
      }
      context.closePath();
      context.fillStyle = `rgba(179, 141, 100, ${opacity * 0.5})`;
      context.shadowColor = "rgba(228, 196, 146, 0.4)";
      context.shadowBlur = 5;
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
          drawHeart(ctx, p.x, p.y, p.size * 2, p.opacity, p.rot);
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
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
