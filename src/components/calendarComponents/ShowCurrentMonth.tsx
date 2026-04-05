import { useNavigate, useSearchParams } from "react-router-dom";
import type { Slot } from "../../contexts/BookingContextData";
import { useCalendar } from "../../contexts/CalendarContext";
import SmallBlock from "../../ui/SmallBlock";
import type { JSX } from "@emotion/react/jsx-runtime";

export default function ShowCurrentMonth() {
  const { currentMonth, daysInMonth, isToday } = useCalendar();
  const [searchParams, serSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const filteredSlots = JSON.parse(localStorage?.getItem("slots"));

  const daysArr = Array.from({ length: daysInMonth }, (_, i) =>
    createDaysObj(i),
  );

  function createDaysObj(i: number) {
    const month = (currentMonth.getMonth() + 1).toString().padStart(2, "0");
    const day = (i + 1).toString().padStart(2, "0");

    const id = `${currentMonth.getFullYear()}-${month}-${day}`;
    const dayObj = {
      id,
    };

    return dayObj;
  }

  function handleSelectedDay(id: string) {
    searchParams.set("dayId", id);
    serSearchParams(searchParams);
    navigate("bookLesson/" + searchParams.toString());
  }

  const days: JSX.Element[] = [];

  daysArr.forEach((day, i) => {
    const greenSlots = filteredSlots?.some(
      (slot: Slot) => slot.start.substring(0, 10) === day.id,
    );

    days.push(
      <SmallBlock
        styles={`${isToday(i + 1) ? "font-semibold" : ""} ${greenSlots && "text-green-day cursor-pointer"} mb-7`}
        onClick={greenSlots ? () => handleSelectedDay(day.id) : () => null}
        key={i}
      >
        {i + 1}
      </SmallBlock>,
    );
  });

  return <>{days}</>;
}
