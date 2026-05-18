import { supabase } from "@/lib/supabase";

export default async function sitemap() {
  // POSTS
  const { data: posts, error: postError } =
    await supabase
      .from("posts")
      .select("slug, updated_at")
      .eq("status", "published");

  // SERVICES
  const {
    data: services,
    error: serviceError,
  } = await supabase
    .from("services")
    .select("slug, updated_at")
    .eq("status", "published");

  // nếu lỗi
  if (postError || serviceError) {
    console.log(postError);
    console.log(serviceError);

    return [
      {
        url: "https://testhisu.vercel.app",
        lastModified: new Date(),
      },
    ];
  }

  // POST URLS
  const postUrls = posts.map((post) => ({
    url: `https://testhisu.vercel.app/posts/${post.slug}`,
    lastModified:
      post.updated_at || new Date(),
  }));

  // SERVICE URLS
  const serviceUrls = services.map(
    (service) => ({
      url: `https://testhisu.vercel.app/services/${service.slug}`,
      lastModified:
        service.updated_at || new Date(),
    })
  );

  // RETURN
  return [
    {
      url: "https://testhisu.vercel.app",
      lastModified: new Date(),
    },

    {
      url: "https://testhisu.vercel.app/posts",
      lastModified: new Date(),
    },

    {
      url: "https://testhisu.vercel.app/services",
      lastModified: new Date(),
    },

    ...postUrls,
    ...serviceUrls,
  ];
}