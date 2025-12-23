export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface Experience {
    company: string;
    role: string;
    date: string;
    type?: "work" | "education";
    description: string;
    technologies: string[];
    logo?: string;
}

export interface Project {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  tags?: string[];
  link?: string;
  github?: string;
  metric: string;
  image?: string;
}

export interface ResumeData {
  name: string;
  initials: string;
  title: string;
  about: string;
  socials: SocialLink[];
  experience: Experience[];
  skills: string[];
  projects: Project[];
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: Date; 
}