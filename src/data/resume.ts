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

  projects: [
    {
        title: "Network Router Monitoring System",
        role: "Software Engineer",
        description: "An automated monitoring system designed for 30+ Mikrotik routers. This system replaced manual connection checks with a real-time WebSocket dashboard, allowing IT staff to instantly visualize network health.",
        technologies: ["React", "Spring Boot", "WebSocket", "Docker", "PostgreSQL"],
        link: "#", 
        github: "#", 
        metric: "Reduced issue resolution time by 30% and decreased administrative workload by 40%.",
        image: "", 
    },
    {
        title: "Internal Leave Management System",
        role: "System Analyst",
        description: "A streamlined HR portal for managing leave requests and approvals. Redesigned the complex approval workflow using BPMN standards to eliminate process bottlenecks and improve transparency.",
        technologies: ["Figma", "BPMN", "ERP Concepts", "Workflow Design"],
        link: "#",
        metric: "Reduced data entry errors by 25% via improved UX validation.",
        image: "",
    },
  ],
};