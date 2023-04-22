import { PostWithAuthorAndCategory } from "@/types/database";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import PostCardContent from "./postCardContent";

interface PostCardProps {
  post: PostWithAuthorAndCategory;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
}
const PostCard = ({
  post,
  direction = "horizontal",
  reverse = false,
}: PostCardProps) => {
  return (
    <Link
      href={`/post/${post.slug}`}
      className={`@container ${
        direction === "horizontal"
          ? "grid grid-cols-1 md:grid-cols-2 gap-10 items-center "
          : " space-y-6 "
      }}`}
    >
      {/* Image */}
      <Image
        className={`rounded-md w-full object-cover object-center h-auto max-h-[300px] bg-neutral-100 ${
          reverse ? " md:order-last " : ""
        }}`}
        width={600}
        height={400}
        alt={post.title!!}
        src={post.image + "&w=600&h=400&auto=format&q=75"}
      />
      {/* Content */}
      <div>
        <PostCardContent post={post} />
        <div className="flex items-center gap-2 mt-4">
          Read More <HiOutlineArrowUpRight />{" "}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
