import { Outlet } from "react-router-dom";

export default function Applayout() {
  return (
    <div className="text-jet flex flex-col justify-center items-center min-h-screen bg-secondary-bg min-w-225">
      <Outlet />
    </div>
  );
}
