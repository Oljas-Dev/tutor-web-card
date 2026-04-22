import useProfile from "../../api/features/useProfile";
import { useUser } from "../../api/features/useUser";
import Stars from "./ui/Stars";

export default function Header() {
  const { profile } = useProfile();
  const { user } = useUser();

  if (!profile) return <p>Waiting for profile to load...</p>;
  console.log(user?.user_metadata.full_name);
  const userRole = profile.length === 0 ? "guest" : profile?.at(0).role;

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
