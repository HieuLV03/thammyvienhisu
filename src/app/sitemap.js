import { supabase } from "@/lib/supabase";

export const revalidate = 3600;

export default async function sitemap() {
  let posts = [];
  let services = [];

  try {
    const { data: postData } = await supabase
      .from("posts")
      .select("slug, updated_at")
      .eq("status", "published");

    const { data: serviceData } = await supabase
      .from("services")
      .select("slug, updated_at")
      .eq("status", "published");

    posts = postData || [];
    services = serviceData || [];
  } catch (err) {
    console.error("Sitemap error:", err);
  }

  const baseUrl = "https://thammyvienhisu.online";

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.updated_at || new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: service.updated_at || new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...postUrls,
    ...serviceUrls,
  ];
}