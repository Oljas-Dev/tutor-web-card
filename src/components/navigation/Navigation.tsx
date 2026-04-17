import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="grid grid-cols-[80%_20%] justify-items-center items-center w-full text-2xl my-6 px-4 cursor-pointer">
      <ul className="flex gap-5">
        <li>
          <Link to={"#"}>about</Link>
        </li>
        <li>
          <Link to={"#"}>reviews</Link>
        </li>
        <li>
          <Link to={"#"}>plans</Link>
        </li>
      </ul>
      <ul className="flex gap-5 text-xl">
        <li>
          <Link to={"/login"}>login</Link>
        </li>
        <li>
          <Link to={"#"}>sign up</Link>
        </li>
      </ul>
    </nav>
  );
}
