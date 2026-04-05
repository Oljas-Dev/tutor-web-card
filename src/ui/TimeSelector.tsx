import { renderTimeViewClock, TimePicker } from "@mui/x-date-pickers";
import { memo } from "react";
import { useBookings } from "../contexts/useBookings";

const TimeSelector = memo(() => {
  const { setStartTime, setEndTime } = useBookings();
  return (
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
  );
});

export { TimeSelector };
