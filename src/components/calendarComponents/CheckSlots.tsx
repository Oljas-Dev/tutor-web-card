import { useNavigate, useParams } from "react-router-dom";
import type { Slot } from "../../contexts/BookingContextData";
import DayWithSlots from "../../ui/DayWithSlots";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { ArrowLeft } from "react-bootstrap-icons";

dayjs.extend(utc);

export default function CheckSlots() {
  const { dayId } = useParams();
  const filteredSlots: Slot[] = JSON.parse(localStorage?.getItem("slots"));

  const navigate = useNavigate();

  const currentDay = dayId?.slice(-10);

  const currentSlots = filteredSlots
    .filter((slot) => slot.start.substring(0, 10) === currentDay)
    .sort(
      (a, b) =>
        Number(dayjs.utc(a.start).format("HH")) -
        Number(dayjs.utc(b.start).format("HH")),
    );

  return (
    <div>
      <ArrowLeft
        style={{ alignSelf: "start", marginBottom: "16px", cursor: "pointer" }}
        onClick={() => navigate("/dashboard")}
      />
      <div className="flex flex-col gap-2">
        <h2>Book lessons on {currentDay}</h2>
        <p className="font-semibold">Available time slots</p>
        {filteredSlots.length >= 0 ? (
          currentSlots.map((slot) => <DayWithSlots slot={slot} key={slot.id} />)
        ) : (
          <div>No slots yet</div>
        )}
      </div>
    </div>
  );
}
