import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Layout, Settings2 } from "lucide-react";

export function Skills() {
  const skillGroups = [
    {
      title: "Backend & Core",
      icon: Database,
      skills: ["Java Spring Boot", "Node.js (NestJS)", "PostgreSQL", "Prisma ORM", "RESTful APIs", "Microservices"],
      cols: "md:col-span-2", 
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      title: "Frontend Interface",
      icon: Layout,
      skills: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/UI"],
      cols: "md:col-span-1",
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      title: "Tools & Workflow",
      icon: Settings2,
      skills: ["Docker", "Git & GitHub", "Figma", "BPMN Notation", "System Analysis", "Agile/Scrum"],
      cols: "md:col-span-3", 
      color: "text-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-950/20",
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container px-4 md:px-6">
       
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Technical Arsenal
          </h2>
          <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed dark:text-zinc-400">
            The tools and technologies I use to build scalable, user-centric solutions.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillGroups.map((group, index) => (
            <Card 
              key={index} 
              className={`${group.cols} relative overflow-hidden border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
            >
              
               <div className={`absolute inset-0 opacity-50 ${group.bg} -z-10`} />
               
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className={`p-2 rounded-lg ${group.bg} ${group.color}`}>
                  <group.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-4">
                  {group.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-white/60 dark:bg-zinc-900/60 hover:bg-white dark:hover:bg-zinc-900 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}