import { MetadataRoute } from "next";
import { services } from "@/data/servicesData";

const BASE_URL = "https://Adverza Solutions.com";

export default function sitemap(): MetadataRoute.Sitemap {

  const staticPages = [
    "",
    "/about",
    "/services",
    "/career",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const servicePages = services
    .flatMap((category) => category.items)
    .map((service) => ({
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...staticPages, ...servicePages];
}