import { useUser } from "../../api/features/useUser";
import Stars from "./ui/Stars";

export default function Header() {
  const { user } = useUser();

  return (
    <div>
      <div className="flex items-center gap-8">
        <h1>Kate Decker</h1>
        <Stars />
      </div>
      <p className="font-semibold">{user ? "teacher" : "guest"}</p>
    </div>
  );
}
