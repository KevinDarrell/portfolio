import { ProjectCard } from "../ui/project-card";
import { resumeData } from "@/data/resume";

export function SelectedWork () {
    return (
        <section id="work" className="py-24 bg-white dark:bg-zinc-950">
            <div className="container px-4 md:px-6">

                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                        Selected Work
                    </h2>

                    <p className="max-w-175 text-zinc-500 md:text-xl/relaxed dark:text-zinc-400">
                        A look at how I solve problems through code and system analysis.
                    </p>
                </div>

                <div className="space-y-24 md:space-y-32">
                    {resumeData.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}