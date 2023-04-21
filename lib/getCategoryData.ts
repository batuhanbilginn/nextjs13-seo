import { CategoryWithPosts } from "@/types/database";
import { supabaseServer } from "./supabase/supabaseServer";

const getCategoryData = async (slug: string) => {
  try {
    const { data: category, error } = await supabaseServer
      .from("categories")
      .select(`*, posts(*, author(full_name, avatar_url), category(title, id))`)
      .eq("slug", slug)
      .returns<CategoryWithPosts[]>();

    if (!category && error) return null;

    return category[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getCategoryData;
