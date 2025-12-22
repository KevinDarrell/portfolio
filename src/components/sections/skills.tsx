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
import { Database, Layout, Settings2, Code2 } from "lucide-react"; // Added Code2 for consistency if needed

export function Skills() {
  const skillGroups = [
    {
      title: "Backend & Core",
      icon: Database,
      cols: "md:col-span-2",
      bg: "bg-blue-50 dark:bg-blue-950/20",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" }, // Yellow-600 agak gelap, 500 lebih pop
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
        { name: "Express", icon: SiExpress, color: "text-zinc-900 dark:text-zinc-100" }, // FIX: Adaptive Color
        { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "Prisma", icon: SiPrisma, color: "text-teal-600 dark:text-teal-400" },
      ],
    },
    {
      title: "Frontend Interface",
      icon: Layout,
      cols: "md:col-span-1",
      bg: "bg-purple-50 dark:bg-purple-950/20",
      skills: [
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-zinc-900 dark:text-zinc-100" }, // FIX: Adaptive Color
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
        { name: "Figma", icon: SiFigma, color: "text-purple-500" },
        { name: "Notion", icon: SiNotion, color: "text-zinc-900 dark:text-zinc-100" }, // FIX: Typo text-black-500
        { name: "System Analysis", icon: Settings2, color: "text-zinc-500 dark:text-zinc-400" }, 
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
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
              className={`${group.cols} relative overflow-hidden border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-md`}
            >
              
              <div className={`absolute inset-0 opacity-30 ${group.bg} -z-10`} />
              
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-2 rounded-lg bg-white/60 dark:bg-zinc-800/60 shadow-sm ring-1 ring-black/5">
                  <group.icon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </div>
                <CardTitle className="text-lg font-bold tracking-tight">{group.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 pt-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2 group/icon cursor-default">
                      <div className="relative p-3 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-all duration-300 group-hover/icon:-translate-y-1 group-hover/icon:shadow-md">
                        <skill.icon className={`text-3xl ${skill.color} transition-colors`} />
                      </div>
                      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover/icon:text-zinc-900 dark:group-hover/icon:text-zinc-200 transition-colors">
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