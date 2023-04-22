import { PostWithAuthorAndCategory } from "@/types/database";
import PostCard from "./postCard";

interface PostCardListProps {
  posts: PostWithAuthorAndCategory[];
}

const PostCardList = ({ posts }: PostCardListProps) => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr ">
      {posts.map((post) => {
        return <PostCard direction="vertical" key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostCardList;
