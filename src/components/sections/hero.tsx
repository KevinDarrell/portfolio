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
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-12 md:py-24 lg:py-3">
            <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                <div className="container px-4 md:px-6">
                    <motion.div
                        className="flex flex-col items-center space-y-4 text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >

                    <motion.div variants={itemVariants}>
                        <div className="inline-block rounded-lg bg-zinc-100 px-3 py-1 text-sm text-zinc-500 ring-1 ring-inset ring-zinc-200">
                            Available for new projects
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-zinc-900">
                            Building Scalable Systems <br className="hidden md:block" />
                            & Intuitive Workflows.
                        </h1>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mx-auto max-w-175 text-zinc-500 md:text-xl dark:text-zinc-400"
                    >
                        Currently engineering AI-driven
                        solutions at <span className="font-semibold text-zinc-900">adAIsolv</span>.
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                        <Link href="#work">
                            <Button size="lg" className="h-12 px-8">
                                View Selected Work
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>

                        <Link href="/resume.pdf" target="_blank">
                            <Button variant="outline" size="lg" className="h-12 px-8">
                                Download CV
                                <Download className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                    </motion.div>
            </div>
        </section>               
    );
}