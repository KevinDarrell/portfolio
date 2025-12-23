"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github } from "lucide-react"; 
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { name: "Selected Work", href: "/#work" }, 
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Guestbook", href: "/#guestbook" }, 
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-zinc-200 dark:border-zinc-800 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          
    
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-lg font-bold tracking-tight group-hover:opacity-80 transition-opacity">
              M Kevin Darrell<span className="text-blue-600">.</span>
            </span>
          </Link>

         
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <div className="h-4 w-[1px] bg-zinc-300 dark:bg-zinc-700 mx-1"></div>

            <Link 
              href="https://github.com/KevinDarrell" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </Link>

        
            <ThemeToggle />

            <Button asChild variant="default" size="sm" className="rounded-full px-5">
              <a href="/resume.pdf" download="M_Kevin_Darrell_CV.pdf">
                Resume
              </a>
            </Button>
          </nav>

         
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />

            <button
              className="md:hidden p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-xl animate-in slide-in-from-top-5"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)} 
              >
                {item.name}
              </Link>
            ))}

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <Link
              href="https://github.com/KevinDarrell"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-300"
              onClick={() => setIsOpen(false)}
            >
              <Github className="w-4 h-4" />
              GitHub Profile
            </Link>

            <Button asChild className="w-full">
              <a href="/resume.pdf" download="M_Kevin_Darrell_CV.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}