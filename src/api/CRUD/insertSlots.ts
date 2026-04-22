import toast from "react-hot-toast";
import type { Slot } from "../../contexts/BookingContextData";
import { supabase } from "../supabase/supabase";

export default async function insertSlots(slots: Slot[]) {
  const { data, error } = await supabase.from("slots").insert(slots).select();

  if (error) {
    if (error.message.includes("no_overlapping_slots")) {
      toast.error(
        "No slots were created. This time overlaps with another slot",
      );
    }
    console.error(error);
  }
  return data;
}
