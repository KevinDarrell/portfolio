"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: any;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1; 

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={cn(
        
        "group relative flex flex-col gap-8 items-center", 
       
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      )}
      aria-labelledby={`project-title-${index}`}
    >
  
      <div className="w-full md:w-1/2 relative group">
        <figure className="relative aspect-video overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 shadow-sm">
          
         
          <div 
            className="absolute top-0 left-0 right-0 h-6 bg-white/50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-700 flex items-center px-3 gap-1.5 z-10"
            aria-hidden="true"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>

        
          {project.image ? (
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 pt-6"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-zinc-300">
              <span className="font-semibold text-xl select-none" aria-hidden="true">
                No Image
              </span>
            </div>
          )}

          
          <div 
            className="absolute inset-0 bg-zinc-900/10 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]"
            aria-hidden="true"
          >
            {project.link?.href && (
               <Button variant="secondary" className="shadow-lg" asChild>
                 <Link href={project.link.href} target="_blank">
                    View Project
                 </Link>
               </Button>
            )}
          </div>
        </figure>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <header className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {project.role || "Developer"}
            </span>
          </div>
          <h3 
            id={`project-title-${index}`}
            className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight"
          >
            {project.title}
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </header>

        {project.metric && (
            <aside 
            className="bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900 p-4 rounded-lg flex items-start gap-3"
            aria-label="Key project outcome"
            >
            <div className="p-2 bg-emerald-100 dark:bg-emerald-800 rounded-full shrink-0 mt-0.5">
                <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-300" />
            </div>
            <div>
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-200">
                Key Outcome
                </p>
                <p className="text-sm text-emerald-700 dark:text-emerald-400">
                {project.metric}
                </p>
            </div>
            </aside>
        )}

        <div className="flex flex-wrap gap-2" role="list">
          {(project.techStack || []).map((tech: string) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
              role="listitem"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <nav className="flex items-center gap-4 pt-2">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
          
          {project.link?.href && (
            <a 
              href={project.link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </nav>
      </div>
    </motion.article>
  );
}