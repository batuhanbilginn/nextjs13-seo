import { PostWithAuthorAndCategory } from "@/types/database";
import { supabaseServer } from "./supabase/supabaseServer";

const getAllPosts = async () => {
  try {
    const { data: posts, error } = await supabaseServer
      .from("posts")
      .select(`*, author(full_name, avatar_url), category(title, id)`)
      .returns<PostWithAuthorAndCategory[]>();
    if (!posts && error) {
      console.log(error);
      return null;
    }
    return posts;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getAllPosts;
