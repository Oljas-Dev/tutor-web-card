import { useNavigate, useParams } from "react-router-dom";
import type { Slot } from "../contexts/BookingContextData";

export default function BookingConfirmation() {
  const { lessonId } = useParams();

  const navigate = useNavigate();
  const id = lessonId?.substring(9);

  const localStorageSlots: Slot[] = JSON.parse(localStorage?.getItem("slots"));

  const currentLesson = localStorageSlots?.filter((lesson) => lesson.id === id);

  function handleBooking() {
    // Filter out booking lesson from prev array
    const prevArr = localStorageSlots?.filter((slot) => slot.id !== id);

    // Return object with new status property
    const editedLesson = currentLesson.map((lesson) =>
      lesson.id === id ? { ...lesson, status: "booked" } : lesson,
    );

    // Save new array in localStorage
    const preparedArr = prevArr.concat(editedLesson);

    localStorage.setItem("slots", JSON.stringify(preparedArr));
    navigate(-1);
  }
  return (
    <div className="flex flex-col gap-4 w-[50%] text-center">
      <h2>Booking Confirmation</h2>
      <div className="flex justify-between">
        <button onClick={() => navigate(-1)}>cancel</button>
        <button
          className="bg-jade disabled:bg-jet/10"
          onClick={() => handleBooking()}
          disabled
        >
          book
        </button>
      </div>
    </div>
  );
}
