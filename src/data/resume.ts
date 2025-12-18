import { ResumeData } from "@/types";

export const resumeData: ResumeData = {
    name: "M Kevin Darrell",
    initials: "MKD",
    title: "Full Stack Engineer",
    about: "A Full Stack Engineer focused on bridging complex backend systems with intuitive user experiences. Currently specializing in the Next.js and Java Spring Boot ecosystem.",
    socials: [
        {
            platform: "GitHub",
            url: "https://github.com/KevinDarrell",
            icon: "github",
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/kevin-darrell/",
            icon: "linkedin",
        },
    ],
    skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "NestJS",
        "Spring Boot",
        "PostgreSQL",
        "Docker",
    ],
    experience: [
    {
      company: "adAIsolv",
      role: "Full Stack Engineer Intern",
      startDate: "Dec 2025",
      endDate: "Present",
      description:
        "Contributing to full-stack development tasks, integrating backend services with frontend interfaces, and optimizing application performance.",
      technologies: ["React", "Next.js", "TypeScript"],
    },
    {
      company: "PT. Charoen Pokphand",
      role: "Software Engineer Intern & System Analyst Intern",
      startDate: "Aug 2025", 
      endDate: "Dec 2025",
      description:
        "Analyzed system requirements and developed software solutions to streamline operational workflows.",
      technologies: ["Java", "SQL", "System Analysis"],
    },
  ],
};