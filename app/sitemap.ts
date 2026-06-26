import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/donate", priority: 0.9, changeFrequency: "monthly" },
  { path: "/get-help", priority: 0.9, changeFrequency: "weekly" },
  { path: "/programs", priority: 0.9, changeFrequency: "monthly" },
  { path: "/one-meal", priority: 0.8, changeFrequency: "monthly" },
  { path: "/one-child", priority: 0.8, changeFrequency: "monthly" },
  { path: "/one-block", priority: 0.8, changeFrequency: "monthly" },
  { path: "/volunteer", priority: 0.8, changeFrequency: "monthly" },
  { path: "/walk-a-thon", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/our-story", priority: 0.7, changeFrequency: "monthly" },
  { path: "/our-impact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/transparency", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.5, changeFrequency: "yearly" },
  { path: "/es", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
