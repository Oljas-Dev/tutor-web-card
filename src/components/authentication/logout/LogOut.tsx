import toast from "react-hot-toast";
import useLogout from "../../../api/features/useLogout";

export default function LogOut() {
  const { logout, isLoginout } = useLogout();

  function handleSignOut() {
    logout();
    toast.success("Hope to see you soon again!");
  }
  return (
    <div className="flex-center gap-2 text-center">
      <h2>Do you really want to sign out?</h2>
      <p>Please confirm your signing out</p>
      <button onClick={() => handleSignOut()} disabled={isLoginout}>
        sign out
      </button>
    </div>
  );
}
