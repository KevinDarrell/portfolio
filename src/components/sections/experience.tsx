import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const timelineData = [
    {
      role: "Full Stack Engineer Intern",
      company: "adAIsolv",
      date: "Present",
      type: "work",
      highlight: "Currently engineering AI-driven solutions and integrating complex backend systems with intuitive frontend interfaces.",
    },
    {
      role: "Software Engineer Intern",
      company: "PT. Charoen Pokphand",
      date: "Aug 2025 - Dec 2025", 
      type: "work",
      highlight: "Built a real-time router monitoring system using WebSocket and Spring Boot, reducing manual checks by 100%.",
    },
    {
      role: "System Analyst Intern",
      company: "PT. Charoen Pokphand",
      date: "Dec 2023 - Feb 2024",
      type: "work",
      highlight: "Designed streamlined leave management workflows using BPMN standards, improving HR process efficiency.",
    },
    {
      role: "Information Systems Graduate",
      company: "Sriwijaya University",
      date: "2020 - 2024",
      type: "education",
      highlight: "Graduated with GPA 3.9/4.0. Focused on Software Engineering and Database Systems.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
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
            {timelineData.map((item, index) => {
              const isCurrent = item.date === "Present";
              const Icon = item.type === 'work' ? Briefcase : GraduationCap;

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
                    "ml-20 w-full p-6 border-zinc-200 dark:border-zinc-800 transition-all group-hover:shadow-md",
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
                      {item.highlight}
                    </p>
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