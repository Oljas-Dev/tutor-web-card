import { supabase } from "../supabase/supabase";

export default async function getSlots() {
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("slots")
    .select("*")
    .gt("end_time", now);

  if (error) {
    console.error(error);
  }
  return data;
}
