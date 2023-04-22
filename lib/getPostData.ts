import { PostWithAuthorAndCategory } from "@/types/database";
import { supabaseServer } from "./supabase/supabaseServer";

const getPostData = async (slug: string) => {
  // Get Post Data From Server
  try {
    const { data: post, error } = await supabaseServer
      .from("posts")
      .select(`*, author(full_name, avatar_url), category(title, id)`)
      .eq("slug", slug)
      .returns<PostWithAuthorAndCategory[]>()
      .limit(1)
      .single();

    if (!post && error) return null;

    return post;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getPostData;
