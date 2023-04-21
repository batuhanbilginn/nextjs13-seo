import PostCardContent from "@/components/post/postCardContent";
import { PostWithAuthorAndCategory } from "@/types/database";
import Image from "next/image";

interface PostHeroProps {
  post: PostWithAuthorAndCategory;
}

const PostHero = ({ post }: PostHeroProps) => {
  return (
    <div className="@container">
      <PostCardContent isPostHero post={post} />
      <Image
        className="w-full h-auto mt-10 max-h-[300px] bg-neutral-100 md:max-h-[500px] object-cover object-center rounded-md"
        width={1280}
        height={628}
        src={post.image + "&w=1280&h=628&auto=format&q=75"}
        alt={post.title!!}
      />
    </div>
  );
};

export default PostHero;
