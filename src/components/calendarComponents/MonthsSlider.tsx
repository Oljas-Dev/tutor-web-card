import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import localeData from "dayjs/plugin/localeData";
import { useCalendar } from "../../contexts/CalendarContext";

dayjs.extend(localizedFormat);
dayjs.extend(localeData);

export default function MonthsSlider() {
  const { handlePreviousMonth, currentMonth, handleNextMonth } = useCalendar();

  const now = dayjs(currentMonth);

  // Get previous month with possibility to make multylingual
  const prevMonthName = now.subtract(1, "month").locale("en").format("MMMM");
  const nextMonthName = now.add(1, "month").locale("en").format("MMMM");

  return (
    <div className="flex justify-between">
      <div onClick={handlePreviousMonth}>
        <h2 className="text-jade-light cursor-pointer">{prevMonthName}</h2>
      </div>
      <h2>
        {currentMonth.toLocaleString("default", { month: "long" })}
        {currentMonth.getFullYear()}
      </h2>
      <div onClick={handleNextMonth}>
        <h2 className="text-jade-light cursor-pointer">{nextMonthName}</h2>
      </div>
    </div>
  );
}
