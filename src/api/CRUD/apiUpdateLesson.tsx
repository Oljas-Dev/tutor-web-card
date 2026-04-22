import { supabase } from "../supabase/supabase";

export async function bookLesson({ lessonId }: { lessonId: string }) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("slots")
    .update({ status: "booked", booked_by: user?.id })
    .eq("id", lessonId)
    .eq("status", "available")
    .select();

  if (error) {
    console.error(error.message);
  }

  return data;
}
