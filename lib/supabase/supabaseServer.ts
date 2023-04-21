import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";
import "server-only";

export const supabaseServer = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!!,
  process.env.SUPABASE_SERVER_KEY!!
);
