import { useContext } from "react";
import { BookingContext } from "./BookingContextData";

export function useBookings() {
  const context = useContext(BookingContext);

  if (context === undefined) {
    throw new Error("Context cannot be used outside Provider");
  }

  return context;
}
