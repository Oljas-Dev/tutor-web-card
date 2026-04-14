import type { Slot } from "../../contexts/BookingContextData";
import { supabase } from "./supabase";

export default async function insertSlots(slots: Slot[]) {
  const { data, error } = await supabase.from("slots").insert(slots).select();

  if (error) {
    console.error(error);
  }
  return data;
}
