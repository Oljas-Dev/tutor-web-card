import useProfile from "../../api/features/useProfile";
import Stars from "./ui/Stars";

export default function Header() {
  const { profile } = useProfile();

  if (!profile) return <p>Waiting for profile to load...</p>;
  const userRole = profile?.at(0).role;

  return (
    <div>
      <div className="flex items-center gap-8">
        <h1>Kate Decker</h1>
        <Stars />
      </div>
      <p className="font-semibold">{userRole}</p>
    </div>
  );
}
