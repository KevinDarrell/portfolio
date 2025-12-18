"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero () {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
    
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
      
          <motion.div variants={itemVariants}>
            <div className="inline-block rounded-full bg-zinc-100/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-zinc-600 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-900/80 dark:text-zinc-400 dark:ring-zinc-800">
              <span className="relative h-2 w-2 inline-flex mr-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div>
          </motion.div>

       
          <motion.div variants={itemVariants} className="space-y-4 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-zinc-900 dark:text-zinc-50">
              Building Scalable Systems <br className="hidden md:block" />
              & Intuitive Workflows.
            </h1>
          </motion.div>

    
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400 leading-relaxed"
          >
            Full Stack Engineer & System Analyst. Currently engineering AI-driven
            solutions at <span className="font-semibold text-zinc-900 dark:text-zinc-100">adAIsolv</span>.
          </motion.div>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col gap-4 min-[400px]:flex-row pt-4 w-full justify-center"
          >
            <Link href="#work">
              <Button size="lg" className="h-12 px-8 w-full min-[400px]:w-auto">
                View Selected Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <a 
              href="/resume.pdf" 
              download="M_Kevin_Darrell_Resume.pdf"
              className="w-full min-[400px]:w-auto"
            >
              <Button variant="outline" size="lg" className="h-12 px-8 w-full bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm">
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}