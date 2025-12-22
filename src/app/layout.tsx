import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { resumeData } from "@/data/resume";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "M Kevin Darrell | Full Stack Engineer & System Analyst",
  description: "Portfolio of M Kevin Darrell, specializing in scalable backend systems and modern frontend interfaces.",
  keywords: resumeData.skills,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-kevin-darrell.vercel.app/", 
    title: "M Kevin Darrell | Full Stack Engineer",
    description: "Building Scalable Systems & Intuitive Workflows.",
    siteName: "M Kevin Darrell Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased relative bg-background text-foreground",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
  
      >
        <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950 transition-colors duration-500 ease-in-out">
          <div className="absolute h-full w-full bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        </div>

        <div className="relative flex flex-col min-h-screen">{children}</div>
        </ThemeProvider> 
      </body>
    </html>
  );
}