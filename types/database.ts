import { Database } from "./supabase";

export type Post = Database["public"]["Tables"]["posts"]["Row"];
export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type Author = Database["public"]["Tables"]["profiles"]["Row"];
export interface CategoryWithPosts extends Category {
  posts: PostWithAuthorAndCategory[];
}
export interface PostWithAuthorAndCategory
  extends Omit<Post, "author" | "category"> {
  author: Author;
  category: Category;
}
