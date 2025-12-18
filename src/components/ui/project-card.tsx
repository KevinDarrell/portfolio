"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Project } from "@/types";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard ({ project, index }: ProjectCardProps) {
    const isReversed = index % 2 === 1;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={cn(
                "flex flex-col gap-8 md:gap-12 items-center",
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
            )}
        >

            <div className="w-full mid:w-1/2 relative group">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 shadow-sm">
                    
                    <div className="absolute top-0 left-0 right-0 h-6 bg-white/50 border-b border-zinc-200 flex items-center px-3 gap-1.5 z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    </div>

                    <div className="w-full h-full flex items-center justify-center bg-zinc-50 text-zinc-300">
                        <span className="font-semibold text-4xl select-none">Project Demo</span>
                    </div>

                    <div className="absolute inset-0 bg-zinc-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" className="shadow-lg">View Details</Button>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                {project.role}
                            </span>                      
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                        {project.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900 p-4 rounded-lg flex items-start gap-3">
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
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-zinc-600 bg-zinc-50">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2 text-sm font-medium">
                            <Github className="w-4 h-4" /> Source Code
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-2 text-sm font-medium">
                            <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}