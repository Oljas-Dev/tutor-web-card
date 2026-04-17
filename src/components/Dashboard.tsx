// import { useUser } from "../api/features/useUser";
import Calendar from "./Calendar";
import Hero from "./HeroSection/Hero";

export default function Dashboard() {
  // const { user } = useUser();
  // console.log(user);

  return (
    <>
      <Hero />
      <Calendar />
    </>
  );
}
