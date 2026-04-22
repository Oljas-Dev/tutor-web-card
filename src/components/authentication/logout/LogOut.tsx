import toast from "react-hot-toast";
import { logout } from "../../../api/authentication/apiAuth";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  const navigate = useNavigate();

  function handleSignOut() {
    logout();
    toast.success("Hope to see you soon again!");
    navigate("/dashboard");
  }
  return (
    <div className="flex-center gap-2 text-center">
      <h2>Do you really want to sign out?</h2>
      <p>Please confirm your signing out</p>
      <button onClick={() => handleSignOut()}>sign out</button>
    </div>
  );
}
