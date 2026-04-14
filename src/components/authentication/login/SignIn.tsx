import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../../api/features/useSingIn";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useLogin();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    login({ email, password });
    console.log("submit");
  }

  return (
    <div className="flex flex-col justify-center gap-6 mx-auto w-[50%] h-screen">
      <div className="text-center">Sign in to access the Tutor Web App</div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="emailInput">Enter your email</label>
            <input
              id="emailInput"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="passwordInput">Enter your password</label>
            <input
              id="passwordInput"
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-jet-500 text-jade-500 hover:bg-jet-500/80 active:bg-jet-500"
            disabled={loading}
          >
            {loading ? "creating user" : "sign in"}
          </button>
        </form>
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <div className="flex flex-col items-center gap-2">
        <p>
          Forgot your <Link to={"/forgot-password"}>password</Link>?{" "}
        </p>
        <p>
          Don't have account yet? <Link to={"/signup"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}
