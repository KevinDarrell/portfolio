"use client"; 

import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { resumeData } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SelectedWork() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? resumeData.projects : resumeData.projects.slice(0, 3);

  return (
    <section id="work" className="py-24">
      <div className="container px-4 md:px-6">
        
       
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Selected Work
            </h2>
            <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed dark:text-zinc-400 mt-4 mx-auto">
              A collection of projects I've built, ranging from full-stack applications to open-source contributions.
            </p>
          </motion.div>
        </div>

        
        <div className="space-y-24 md:space-y-32 max-w-5xl mx-auto">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {resumeData.projects.length > 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center pt-16"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="gap-2 rounded-full px-8"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View All Projects ({resumeData.projects.length}) <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </motion.div>
        )}
        
      </div>
    </section>
  );
}