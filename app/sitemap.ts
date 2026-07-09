import type { MetadataRoute } from "next";
import { posts } from "@/app/blog/posts";
import { projects } from "@/app/projects/projects";

const BASE = "https://ygnk.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectEntries = projects.map((project) => ({
    url: `${BASE}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogEntries,
    ...projectEntries,
  ];
}
