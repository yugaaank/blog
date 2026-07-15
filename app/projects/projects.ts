export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  date: string;
  tags: string[];
  relatedPosts?: string[];
  challenges: string[];
  features: string[];
  future: string[];
  timeline: { phase: string; date: string; desc: string }[];
}

export const projects: Project[] = [];
