import getAllCategories from "@/lib/getAllCategories";
import getAllPosts from "@/lib/getAllPosts";

export default async function sitemap() {
  const baseUrl = "https://nextjs13-seo.vercel.app";

  // Get All Posts from CMS
  const posts = await getAllPosts();
  const postsUrls =
    posts?.map((post) => {
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  // Get All Categories from CMS
  const categories = await getAllCategories();
  const categoriesUrls =
    categories?.map((category) => {
      return {
        url: `${baseUrl}/${category.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postsUrls,
    ...categoriesUrls,
  ];
}
