import { useNavigate, useParams } from "react-router-dom";
import DayWithSlots from "../../ui/DayWithSlots";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { ArrowLeft } from "react-bootstrap-icons";
import { useBookings } from "../../contexts/useBookings";

dayjs.extend(utc);

export default function CheckSlots() {
  const { filteredSlots } = useBookings();
  const { dayId } = useParams();

  const navigate = useNavigate();

  const currentDay = dayId?.slice(-10);
  const formatedCurrentDay = dayjs(currentDay).format("MMMM D");

  const currentSlots = filteredSlots
    .filter((slot) => slot.start.substring(0, 10) === currentDay)
    .sort(
      (a, b) =>
        Number(dayjs.utc(a.start).format("HH")) -
        Number(dayjs.utc(b.start).format("HH")),
    );

  return (
    <div className="w-[50%]">
      <ArrowLeft
        style={{ alignSelf: "start", marginBottom: "16px", cursor: "pointer" }}
        onClick={() => navigate("/dashboard")}
      />
      <div className="flex flex-col gap-2">
        <h2>Book lessons on {formatedCurrentDay}</h2>
        <p className="font-semibold">Available time slots</p>
        {currentSlots.length > 0 ? (
          currentSlots.map((slot) => <DayWithSlots slot={slot} key={slot.id} />)
        ) : (
          <div className="text-xl">All available slots have perished</div>
        )}
      </div>
    </div>
  );
}
