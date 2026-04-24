import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import type { Slot } from "../../contexts/BookingContextData";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useBookings } from "../../contexts/useBookings";
import { useUser } from "../../api/features/useUser";

dayjs.extend(utc);

export default function DayWithSlots({
  slot,
  openDialog,
}: {
  slot: Slot;
  openDialog: (slotId: string) => void;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setNoUserError } = useBookings();
  const { user } = useUser();

  const navigate = useNavigate();
  const booked = slot.status === "booked";
  const startTime = dayjs.utc(slot.start_time).format("HH:mm");
  const endTime = dayjs.utc(slot.end_time).format("HH:mm");
  //   console.log(date);

  function handleSlotClick() {
    if (!user) {
      setNoUserError(true);
      return;
    }
    searchParams.set("lessonId", slot.id);
    setSearchParams(searchParams);
    navigate(searchParams.toString());
  }

  return (
    <>
      <div
        className={`flex flex-col items-center py-2 rounded ${booked ? "bg-jade-light/40 [&_p]:text-jet/50 hover:bg-jade-light/40 hover:[&_p]:text-jet/50" : "bg-jade cursor-pointer hover:bg-jet hover:[&_p]:text-jade"} card`}
        onClick={
          slot.status === "available" ? () => handleSlotClick() : () => null
        }
      >
        <div className="flex justify-between items-center w-full px-3">
          <p>
            {startTime} - {endTime} {slot.status}
          </p>
          <button
            className="iconBtn"
            onClick={(e) => {
              e.stopPropagation();
              openDialog(slot.id);
            }}
          >
            <i className="bi bi-trash3-fill icon"></i>
          </button>
        </div>
      </div>
    </>
  );
}
