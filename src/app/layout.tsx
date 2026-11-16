import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Birthday Misha ❤️ | Forever & Always",
  description: "A special, magical birthday celebration crafted with love for Misha. Happy Birthday my love!",
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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen bg-[#090308] text-rose-50 selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
