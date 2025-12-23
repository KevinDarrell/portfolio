import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { resumeData } from "@/data/resume";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap", 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-kevin-darrell.vercel.app"),
  title: {
    default: `${resumeData.name} | Full Stack Engineer`,
    template: `%s | ${resumeData.name}`, 
  },
  description:
    "Full Stack Engineer specializing in scalable backend systems, intuitive frontend interfaces, and system analysis. Currently building AI-driven solutions at datAIsolv.",
  keywords: [
    ...resumeData.skills,
    "Full Stack Developer",
    "Software Engineer",
    "System Analyst",
    "Next.js Developer",
    "Spring Boot Developer",
    "Portfolio",
  ],
  authors: [{ name: resumeData.name }],
  creator: resumeData.name,
  
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-kevin-darrell.vercel.app",
    title: `${resumeData.name} | Portfolio`,
    description: "Building Scalable Systems & Intuitive Workflows",
    siteName: `${resumeData.name} Portfolio`,
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "M Kevin Darrell - Full Stack Engineer",
      },
      
    ],
  },

  
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  
  verification: {
    google: "your-google-verification-code", 
  },

  
  manifest: "/site.webmanifest",

 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        
        
        <StructuredData />

  
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          
        >
        
           <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950 transition-colors duration-500">
            <div className="absolute h-full w-full bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
          </div>

          <main id="main-content" className="relative flex flex-col min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}