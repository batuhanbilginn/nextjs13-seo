import CtaCard from "@/components/elements/ctaCard";
import PaddingContainer from "@/components/layouts/paddingContainer";
import getAllPosts from "@/lib/getAllPosts";
import getPostData from "@/lib/getPostData";
import { notFound } from "next/navigation";
import PostBody from "./postBody";
import PostHero from "./postHero";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  try {
    const post = await getPostData(params.slug);
    if (!post)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };

    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: `/post/${post.slug}`,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  if (!posts) return [];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPage = async ({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) => {
  const post = await getPostData(slug);
  if (!post) notFound();

  return (
    <PaddingContainer>
      <div className="space-y-10">
        <PostHero post={post} />
        <PostBody post={post} />
        <CtaCard />
      </div>
    </PaddingContainer>
  );
};

export default BlogPage;
