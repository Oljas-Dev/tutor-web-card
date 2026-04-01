import MonthsSlider from "./calendarComponents/MonthsSlider";
import ShowCurrentMonth from "./calendarComponents/ShowCurrentMonth";
import ShowNextMonth from "./calendarComponents/ShowNextMonth";
import ShowPreviousMonth from "./calendarComponents/ShowPreviousMonth";
import WeekDays from "./calendarComponents/WeekDays";

export default function Calendar() {
  return (
    <div className="bg-jade text-jet w-full px-10 pt-6 pb-15">
      <MonthsSlider />
      <WeekDays />
      <div className="calendar-grid">
        <ShowPreviousMonth />
        <ShowCurrentMonth />
        <ShowNextMonth />
      </div>
    </div>
  );
}
