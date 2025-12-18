import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter ({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "M Kevin Darrell - Full Stack Engineer",
  description:
    "Portfolio of a Full Stack Engineer & System Analyst.",
};

export default function RootLayout ({
  children,
}: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
      className={cn(
        "min-h-screen bg-zinc-50 font-sans antialiased text-zinc-900",
        inter.variable
      )}
      >
        {children}
      </body>
    </html>
  );
}