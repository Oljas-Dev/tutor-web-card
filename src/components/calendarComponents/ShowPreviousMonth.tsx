import { useCalendar } from "../../contexts/CalendarContext";

export default function ShowPreviousMonth() {
  const { firstDayOfMonth, lastDaysPreviousMonth, handlePreviousMonth } =
    useCalendar();
  return (
    <>
      {firstDayOfMonth !== 0 &&
        lastDaysPreviousMonth.map((day, i) => (
          <div
            onClick={handlePreviousMonth}
            className="text-jade-light"
            key={i}
          >
            {day}
          </div>
        ))}
    </>
  );
}
