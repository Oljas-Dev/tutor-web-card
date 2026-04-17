import { supabase } from "../supabase/supabase";

export async function bookLesson({
  value,
  lessonId,
}: {
  value: string;
  lessonId: string;
}) {
  const { data, error } = await supabase
    .from("slots")
    .update({ status: value })
    .eq("id", lessonId)
    .select();

  if (error) {
    console.error(error.message);
  }

  return data;
}
