import { supabaseServer } from "./supabase/supabaseServer";

const getAllCategories = async () => {
  try {
    const { data: categories, error } = await supabaseServer
      .from("categories")
      .select(`*`);
    if (!categories && error) return null;
    return categories;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getAllCategories;
