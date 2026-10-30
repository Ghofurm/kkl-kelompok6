export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site-url";
import { destinations, days } from "@/data/trip";


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    ...days.map((day) => ({
      url: `${siteUrl}/perjalanan/hari-${day.id}/`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    ...destinations.map((destination) => ({
      url: `${siteUrl}/destinasi/${destination.slug}/`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
