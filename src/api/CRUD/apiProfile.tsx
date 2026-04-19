import { supabase } from "../supabase/supabase";

export default async function getProfile() {
  const { data: profiles, error } = await supabase.from("profiles").select("*");

  if (error) {
    console.error(error);
  }

  return profiles;
}
