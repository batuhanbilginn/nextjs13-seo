import CtaCard from "@/components/elements/ctaCard";
import PaddingContainer from "@/components/layouts/paddingContainer";
import PostCard from "@/components/post/postCard";
import PostCardList from "@/components/post/postCardList";
import getAllPosts from "@/lib/getAllPosts";
import { notFound } from "next/navigation";

export default async function Home() {
  const posts = await getAllPosts();

  if (!posts || posts.length === 0) return notFound();

  return (
    <div className="">
      <PaddingContainer>
        <main className="space-y-10">
          <PostCard direction="horizontal" post={posts[0]} />
          <PostCardList posts={[posts[1], posts[2]]} />
          {/* CTA */}
          <CtaCard />
          <PostCard reverse direction="horizontal" post={posts[3]} />
          <PostCardList posts={[posts[4], posts[5]]} />
        </main>
      </PaddingContainer>
    </div>
  );
}
