import { createClient } from "@supabase/supabase-js";

// Create a supabase client for interacting with database available for users
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);
