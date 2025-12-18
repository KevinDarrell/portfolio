import type { Metadata } from "next";
import { Inter } from "next/font/google";
// CRITICAL FIX: This import must be here for Tailwind to load
import "./globals.css"; 
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Engineer",
  description: "Portfolio of a Full Stack Engineer & System Analyst.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen font-sans antialiased relative bg-background text-foreground",
          inter.variable
        )}
      >
        {/* Background Pattern Layer */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950">
           <div className="absolute h-full w-full bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        </div>

        {/* Content Layer */}
        <div className="relative flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}