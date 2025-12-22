import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container px-4 md:px-6 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-lg">M Kevin Darrell</span>
            <span className="text-sm text-zinc-500">
              © {new Date().getFullYear()}. Built with Next.js, Tailwind & Framer Motion.
            </span>
          </div>

          
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/KevinDarrell" 
              target="_blank"
              className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            </Link>
            
            <Link
              href="https://www.linkedin.com/in/kevin-darrell/" 
              target="_blank"
              className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            </Link>
            
            <a
              href="mailto:mkevindarrell1207@gmail.com"
              className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}