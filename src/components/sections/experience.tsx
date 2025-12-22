import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap } from "lucide-react";
import { resumeData } from "@/data/resume";

export function Experience() {
  return (
 
    <section id="experience" className="py-24">
      <div className="container px-4 md:px-6">
       
         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Professional Journey
          </h2>
          <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed dark:text-zinc-400">
            My timeline of experience, education, and growth.
          </p>
        </div>

       
        <div className="max-w-3xl mx-auto relative">
      
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-12">
            {resumeData.experience.map((item, index) => {
              const isCurrent = item.date.toLowerCase().includes("present");

              const type = ( item as any ).type || "work";
              const Icon = type === 'education' ? GraduationCap : Briefcase;
            
              return (
                <div key={index} className="relative flex gap-8 group">
                  
                  
                  <div className={cn(
                    "absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full border-4 z-10 bg-white dark:bg-zinc-950 transition-colors group-hover:scale-110",
                     isCurrent 
                      ? "border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400" 
                      : "border-zinc-100 text-zinc-400 dark:border-zinc-800 dark:text-zinc-500"
                  )}>
                    <Icon className="h-6 w-6" />
                    {isCurrent && (
                      <span className="absolute inset-0 rounded-full animate-ping bg-blue-400/20 dark:bg-blue-600/20"></span>
                    )}
                  </div>

           
                  <Card className={cn(
                    "ml-20 w-full p-6 border-zinc-200 dark:border-zinc-800 transition-all group-hover:shadow-md bg-white/60 dark:bg-zinc-950/60 backdrop-blur-sm",
                    isCurrent ? "border-blue-200/50 dark:border-blue-900/50" : ""
                  )}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className={cn("text-xl font-bold", isCurrent ? "text-blue-900 dark:text-blue-100" : "")}>
                          {item.role}
                        </h3>
                        <p className="text-zinc-500 font-medium">{item.company}</p>
                      </div>
                      <Badge variant={isCurrent ? "default" : "secondary"} className="w-fit">
                        {item.date}
                      </Badge>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span key={tech} className="text-xs text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}