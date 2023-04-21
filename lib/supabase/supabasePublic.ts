import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

export const supababasePublic = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!!
);
