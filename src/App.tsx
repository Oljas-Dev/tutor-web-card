import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import { BookingContextProvider } from "./contexts/BookingContext";
import { CalendarProvider } from "./contexts/CalendarContext";
import Dashboard from "./components/Dashboard";
import Planner from "./components/Planner";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CheckTimeSlots from "./components/calendarComponents/CheckTimeSlots";
import BookingConfirmation from "./ui/BookingConfirmation";
import { Toaster } from "react-hot-toast";
import SignIn from "./components/authentication/login/SignIn";

function App() {
  return (
    <BrowserRouter>
      <CalendarProvider>
        <BookingContextProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <main className="flex flex-col justify-center items-center text-3xl bg-main-bg pb-20">
              <Routes>
                <Route path="login" element={<SignIn />} />
                <Route path="/" element={<Applayout />}>
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="planner" element={<Planner />} />
                  <Route
                    path="dashboard/bookLesson/:dayId"
                    element={<CheckTimeSlots />}
                  />
                  <Route
                    path="dashboard/bookLesson/:dayId/:lessonId"
                    element={<BookingConfirmation />}
                  />
                </Route>
              </Routes>
              <Toaster
                toastOptions={{
                  duration: 3000,
                  style: {
                    fontSize: "14px",
                    background: "#abd1c6",
                    color: "#312f2c",
                  },
                }}
              />
            </main>
          </LocalizationProvider>
        </BookingContextProvider>
      </CalendarProvider>
    </BrowserRouter>
  );
}

export default App;
