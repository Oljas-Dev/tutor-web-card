import { useCalendar } from "../../contexts/CalendarContext";

export default function ShowNextMonth() {
  const { daysOfNextMonth, handleNextMonth } = useCalendar();
  return (
    <>
      {daysOfNextMonth < 7 &&
        Array.from({ length: daysOfNextMonth }).map((_, i) => (
          <div key={i} className="text-jade-light" onClick={handleNextMonth}>
            {i + 1}
          </div>
        ))}
    </>
  );
}
