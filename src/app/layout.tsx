import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Engineer",
  description: "Portfolio of a Full Stack Engineer & System Analyst.",
  keywords: [
    "Full Stack Engineer",
    "Java Spring Boot",
    "NestJS",
    "Next.js",
    "System Analyst",
    "Portfolio",
    "M Kevin Darrell",
  ],
  authors: [{ name: "M Kevin Darrell" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // Replace with your actual deployment URL
    title: "M Kevin Darrell | Full Stack Engineer",
    description: "Building scalable backend systems and intuitive frontend designs.",
    siteName: "M Kevin Darrell Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Place a screenshot of your site in public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "M Kevin Darrell Portfolio Preview",
      },
    ],
  },
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
       
        <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950">
          <div className="absolute h-full w-full bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        </div>

     
        <div className="relative flex flex-col min-h-screen">{children}</div>
      </body>
    </html>
  );
}
