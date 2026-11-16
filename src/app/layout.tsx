import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Happy Birthday Misha ❤️ | Forever & Always",
  description: "A special, elegant birthday celebration crafted with love for Misha. Happy Birthday my love!",
  keywords: ["Happy Birthday Misha", "Birthday Wish", "Love", "Misha"],
  openGraph: {
    title: "Happy Birthday Misha ❤️",
    description: "Wishing the most wonderful birthday to the most special person in my universe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen bg-[#faf7f2] text-warmBrown-900 selection:bg-beige-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
