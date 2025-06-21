export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  current?: boolean;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  budget: string;
  message: string;
}

export interface Stats {
  years: number;
  projects: number;
  clients: number;
} 