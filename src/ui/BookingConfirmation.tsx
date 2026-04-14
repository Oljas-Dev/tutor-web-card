import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import toast from "react-hot-toast";
import { useBookings } from "../contexts/useBookings";

dayjs.extend(utc);

export default function BookingConfirmation() {
  const { filteredSlots } = useBookings();
  const { lessonId } = useParams();

  const navigate = useNavigate();
  const id = lessonId?.substring(9);

  const currentLesson = filteredSlots?.filter((lesson) => lesson.id === id);

  const currentLessonDate = dayjs.utc(currentLesson[0].start).format("MMMM D");
  const currentLessonStartTime = dayjs
    .utc(currentLesson[0].start)
    .format("HH:mm");
  const currentLessonEndTime = dayjs.utc(currentLesson[0].end).format("HH:mm");
  const currentLessonDuration = currentLesson[0].duration;

  function handleBooking() {
    // Filter out booking lesson from prev array
    const prevArr = filteredSlots?.filter((slot) => slot.id !== id);

    // Return object with new status property
    const editedLesson = currentLesson.map((lesson) =>
      lesson.id === id ? { ...lesson, status: "booked" } : lesson,
    );

    // Save new array in localStorage
    const preparedArr = prevArr.concat(editedLesson);

    localStorage.setItem("slots", JSON.stringify(preparedArr));

    toast.success("Success! Your booking information was sent to your email");
    navigate(-1);
  }
  return (
    <div className="flex flex-col gap-4 w-[50%] text-center">
      <h2>Booking Confirmation on {currentLessonDate}</h2>
      <div>
        <h3 className="text-left">Lesson duration</h3>
        <p className="bg-jade items-center py-2 rounded">
          {currentLessonDuration} minutes
        </p>
      </div>

      <div>
        <h3 className="text-left">Lesson time</h3>
        <p className="bg-jade items-center py-2 rounded">
          from <strong>{currentLessonStartTime}</strong> to{" "}
          <strong>{currentLessonEndTime}</strong>
        </p>
      </div>

      <div className="flex justify-between">
        <button onClick={() => navigate(-1)}>cancel</button>
        <button
          className="bg-jade hover:bg-jade/70 disabled:bg-jet/10"
          onClick={() => handleBooking()}
          // disabled
        >
          book
        </button>
      </div>
    </div>
  );
}
