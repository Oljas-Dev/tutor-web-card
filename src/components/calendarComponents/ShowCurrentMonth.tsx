import { useCalendar } from "../../contexts/CalendarContext";
import SmallBlock from "../../ui/SmallBlock";

export default function ShowCurrentMonth() {
  const { currentMonth, daysInMonth, isToday } = useCalendar();

  const daysArr = Array.from({ length: daysInMonth }, (_, i) =>
    createDaysObj(i),
  );

  function createDaysObj(i: number) {
    return {
      id: (i + 1).toString() + "." + (currentMonth.getMonth() + 1).toString(),
    };
  }
  return (
    <>
      {daysArr.map((_day, i) => (
        <SmallBlock
          styles={`${isToday(i + 1) ? "font-semibold" : ""} mb-7 cursor-pointer`}
          key={i}
        >
          {i + 1}
        </SmallBlock>
      ))}
    </>
  );
}
