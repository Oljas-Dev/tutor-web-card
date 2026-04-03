import { useBookings } from "../../contexts/useBookings";

type WeekDays = {
  name: string;
  id: number;
};

export default function WeekDays({
  styles,
  fn,
}: {
  styles?: string;
  fn?: boolean;
}) {
  const { selectedDays, setSelectedDays } = useBookings();
  const weekdaysArr: WeekDays[] = [
    {
      name: "Su",
      id: 0,
    },
    {
      name: "Mo",
      id: 1,
    },
    {
      name: "Tu",
      id: 2,
    },
    {
      name: "We",
      id: 3,
    },
    {
      name: "Th",
      id: 4,
    },
    {
      name: "Fr",
      id: 5,
    },
    {
      name: "St",
      id: 6,
    },
  ];

  function handleSelectDays(i: number) {
    setSelectedDays((prev) => [...prev, i]);
  }
  return (
    <div className={`calendar-grid ${styles}`}>
      {weekdaysArr.map((day, i) => (
        <p
          key={i}
          onClick={fn ? () => handleSelectDays(i) : () => null}
          className={`${selectedDays.some((day) => day === weekdaysArr[i].id) && "font-semibold underline"}`}
        >
          {day.name}
        </p>
      ))}
    </div>
  );
}
