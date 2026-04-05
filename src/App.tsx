import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import { BookingContextProvider } from "./contexts/BookingContext";
import { CalendarProvider } from "./contexts/CalendarContext";
import Dashboard from "./components/Dashboard";
import Planner from "./components/Planner";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CheckSlots from "./components/calendarComponents/CheckSlots";
import BookingConfirmation from "./ui/BookingConfirmation";

function App() {
  return (
    <BrowserRouter>
      <CalendarProvider>
        <BookingContextProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <main className="flex flex-col justify-center items-center text-3xl bg-main-bg h-screen">
              <Routes>
                <Route path="/" element={<Applayout />}>
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="planner" element={<Planner />} />
                  <Route
                    path="dashboard/bookLesson/:dayId"
                    element={<CheckSlots />}
                  />
                  <Route
                    path="dashboard/bookLesson/:dayId/:lessonId"
                    element={<BookingConfirmation />}
                  />
                </Route>
              </Routes>
            </main>
          </LocalizationProvider>
        </BookingContextProvider>
      </CalendarProvider>
    </BrowserRouter>
  );
}

export default App;
