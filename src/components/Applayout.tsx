import { Outlet } from "react-router-dom";

export default function Applayout() {
  return (
    <div className="text-jet flex flex-col justify-center items-center  bg-secondary-bg min-w-225">
      <Outlet />
    </div>
  );
}
