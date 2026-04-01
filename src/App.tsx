import Applayout from "./components/Applayout";
import { CalendarProvider } from "./contexts/CalendarContext";

function App() {
  return (
    <CalendarProvider>
      <main className="flex flex-col justify-center items-center text-3xl bg-main-bg h-screen">
        <Applayout />
      </main>
    </CalendarProvider>
  );
}

export default App;
