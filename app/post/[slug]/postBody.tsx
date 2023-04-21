import ShareLinks from "@/components/elements/shareLinks";
import getParsedHTML from "@/lib/getParsedHTML";
import { PostWithAuthorAndCategory } from "@/types/database";

interface PostBodyProps {
  post: PostWithAuthorAndCategory;
}

const PostBody = ({ post }: PostBodyProps) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
      <div className="md:col-span-2">
        <ShareLinks url={post.slug} />
      </div>
      <div className="md:col-span-10 blog-rich-text">
        {getParsedHTML(post.body!!)}
      </div>
    </div>
  );
};

export default PostBody;
