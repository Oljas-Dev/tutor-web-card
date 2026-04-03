import {
  DatePicker,
  renderTimeViewClock,
  TimePicker,
} from "@mui/x-date-pickers";
import { useBookings } from "../contexts/useBookings";
import dayjs from "dayjs";
import WeekDays from "./calendarComponents/WeekDays";
import type { RecurringFormState } from "../contexts/BookingContextData";

export default function Planner() {
  const {
    startDate,
    endDate,
    startTime,
    endTime,
    duration,
    setDuration,
    buffer,
    setBuffer,
    setEndTime,
    setStartTime,
    setStartDate,
    setEndDate,
    uniqueSelectedDays,
    generateSlots,
    filterAvailableSlots,
    bookedSlots,
    setTestSlots,
    testSlots,
  } = useBookings();

  function handleSubmit() {
    const newSlots: RecurringFormState = {
      startDate,
      endDate,
      selectedDays: uniqueSelectedDays,
      startTime,
      endTime,
      duration,
      buffer,
      exceptions: [
        { type: "exclude", date: "" },
        {
          type: "override",
          date: "",
          startTime: "",
          endTime: "",
        },
      ],
    };

    if (!newSlots) {
      throw new Error("Dates are not correct, please check your dates");
    }
    const generatedSlots = generateSlots(newSlots);

    const filteredSlots = filterAvailableSlots(generatedSlots, bookedSlots);

    setTestSlots(filteredSlots);

    console.log(testSlots);
  }

  // console.log("from", startTime, "to", endTime);

  return (
    <div className="flex flex-col gap-6 text-center w-[60%]">
      <h2>Create a reccuring schedule of your lessons</h2>
      <div className="flex flex-col gap-10 w-full">
        <p className="text-lg font-bold">Choose your working period</p>

        <div className="flex justify-between">
          {/* To be refactored */}
          <div className="flex flex-col gap-1">
            <p>Please set the start point</p>
            <DatePicker
              disablePast
              format="YYYY-MM-DD"
              onChange={(value) => setStartDate(value!.format("YYYY-MM-DD"))}
            />
          </div>

          {/* To be refactored */}
          <div className="flex flex-col gap-1">
            <p>Please set the end point</p>
            <DatePicker
              disabled={!startDate}
              disablePast
              format="YYYY-MM-DD"
              onChange={(value) => setEndDate(value!.format("YYYY-MM-DD"))}
              minDate={dayjs(startDate)}
            />
          </div>
        </div>
        <hr />

        <div className="">
          <p className="text-lg font-semibold">
            Now let's choose days of week when you plan to work
          </p>
          <WeekDays styles={`cursor-pointer`} fn={true} />
        </div>
        <hr />

        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">
            Here you can set your working hours
          </p>
          <div className="flex justify-between">
            {/* To be refactored */}
            <div className="flex flex-col gap-1">
              <p>Please set the start point</p>
              <TimePicker
                label="from"
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
                onChange={(value) => setStartTime(value!.format("HH:mm"))}
              />
            </div>

            {/* To be refactored */}
            <div className="flex flex-col gap-1">
              <p>Please set the end point</p>
              <TimePicker
                label="to"
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
                onChange={(value) => setEndTime(value!.format("HH:mm"))}
              />
            </div>
          </div>
        </div>
        <hr />

        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <label htmlFor="lessonDuration">Lesson duration</label>
            <select
              id="lessonDuration"
              className="p-2 border text-sm rounded"
              onChange={(e) => setDuration(Number(e.target.value))}
            >
              <option value="30" className="text-sm">
                30
              </option>
              <option value="45">45</option>
              <option value="60">60</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="lessonDuration">Buffer between lessons</label>
            <select
              id="lessonDuration"
              className="p-2 border text-sm rounded"
              defaultValue={0}
              onChange={(e) => setBuffer(Number(e.target.value))}
            >
              <option value="0">none</option>
              <option value="5">5 min</option>
              <option value="10">10 min</option>
              <option value="15">15 min</option>
            </select>
          </div>
        </div>

        <button className="cursor-pointer" onClick={() => handleSubmit()}>
          save
        </button>
      </div>
    </div>
  );
}
