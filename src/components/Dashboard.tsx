// import { useUser } from "../api/features/useUser";
import Calendar from "./Calendar";
import Hero from "./HeroSection/Hero";
import Navigation from "./navigation/Navigation";

export default function Dashboard() {
  // const { user } = useUser();
  // console.log(user);

  return (
    <>
      <Navigation />
      <Hero />
      <Calendar />
    </>
  );
}
