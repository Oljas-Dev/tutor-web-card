import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import type { Slot } from "../contexts/BookingContextData";
import { useNavigate, useSearchParams } from "react-router-dom";

dayjs.extend(utc);

export default function DayWithSlots({ slot }: { slot: Slot }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const startTime = dayjs.utc(slot.start_time).format("HH:mm");
  const endTime = dayjs.utc(slot.end_time).format("HH:mm");
  //   console.log(date);

  function handleSlotClick() {
    searchParams.set("lessonId", slot.id);
    setSearchParams(searchParams);
    navigate(searchParams.toString());
  }
  return (
    <div
      className={`flex flex-col items-center py-2 rounded ${slot.status === "booked" ? "bg-jade-light/40 [&_p]:text-jet/50" : "bg-jade cursor-pointer"}`}
      onClick={
        slot.status === "available" ? () => handleSlotClick() : () => null
      }
    >
      <p>
        {startTime} - {endTime} {slot.status}
      </p>
    </div>
  );
}
