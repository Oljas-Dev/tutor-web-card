import { useNavigate, useParams } from "react-router-dom";
import DayWithSlots from "../../ui/DayWithSlots";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { ArrowLeft } from "react-bootstrap-icons";
import { useLessons } from "../../api/features/useLessons";

dayjs.extend(utc);

export default function CheckTimeSlots() {
  const { lessons } = useLessons();
  const { dayId } = useParams();

  const navigate = useNavigate();

  if (!lessons) return <p>waiting for lessons to load...</p>;

  const currentDay = dayId?.slice(-10);
  const formatedCurrentDay = dayjs(currentDay).format("MMMM D");

  const currentSlots = lessons
    ?.filter((slot) => slot.start_time.substring(0, 10) === currentDay)
    .sort(
      (a, b) =>
        Number(dayjs.utc(a.start_time).format("HH")) -
        Number(dayjs.utc(b.start_time).format("HH")),
    );

  return (
    <div className="w-[50%]">
      <div className="bg-jet/20 max-w-fit px-2 rounded-lg hover:bg-jet/10">
        <ArrowLeft
          style={{
            alignSelf: "start",
            marginBottom: "16px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/dashboard")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2>Book lessons on {formatedCurrentDay}</h2>
        <p className="font-semibold">Available time slots</p>
        {currentSlots!.length > 0 ? (
          currentSlots?.map((slot) => (
            <DayWithSlots slot={slot} key={slot.id} />
          ))
        ) : (
          <div className="text-xl">No lessons available at this date</div>
        )}
      </div>
    </div>
  );
}
