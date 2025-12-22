import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SiSpringboot,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiDocker,
  SiFigma,
  SiGit,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiNotion,
} from "react-icons/si";
import { Database, Layout, Settings2 } from "lucide-react";

export function Skills() {
  const skillGroups = [
    {
      title: "Backend & Core",
      icon: Database,
      cols: "md:col-span-2",
      bg: "bg-blue-50 dark:bg-blue-950/20",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-600" },
        { name: "NodeJs", icon: SiNodedotjs, color: "text-green-600" },
        { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
        { name: "ExpressJS", icon: SiExpress, color: "text-black-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "Prisma", icon: SiPrisma, color: "text-teal-600 dark:text-teal-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
      ],
    },
    {
      title: "Frontend Interface",
      icon: Layout,
      cols: "md:col-span-1",
      bg: "bg-purple-50 dark:bg-purple-950/20",
      skills: [
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-zinc-900 dark:text-zinc-100" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Framer", icon: SiFramer, color: "text-zinc-900 dark:text-zinc-100" },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: Settings2,
      cols: "md:col-span-3",
      bg: "bg-emerald-50 dark:bg-emerald-950/20",
      skills: [
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "Notion", icon: SiNotion, color: "text-black-500" },
        { name: "Figma", icon: SiFigma, color: "text-purple-500" },
        { name: "System Analysis", icon: Settings2, color: "text-zinc-500" }, 
      ],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Technical Stack
          </h2>
          <p className="max-w-[700px] text-zinc-500 md:text-xl/relaxed dark:text-zinc-400">
             The specific tools I use to engineer scalable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillGroups.map((group, index) => (
            <Card
              key={index}
              className={`${group.cols} relative overflow-hidden border-zinc-200 dark:border-zinc-800`}
            >
              <div className={`absolute inset-0 opacity-30 ${group.bg} -z-10`} />
              
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-2 rounded-lg bg-white/50 dark:bg-zinc-800/50 shadow-sm">
                  <group.icon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </div>
                <CardTitle className="text-lg font-medium">{group.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2 group/icon">
                      <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-transform group-hover/icon:-translate-y-1">
                        <skill.icon className={`text-3xl ${skill.color}`} />
                      </div>
                      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        {skill.name}
                      </span>
                    </div>
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