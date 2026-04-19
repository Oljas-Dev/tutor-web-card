import AboutMeText from "./AboutMeText";
import Achievements from "./Achievements";
import Avatar from "./Avatar";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="grid grid-cols-[70%_30%] w-full bg-jade px-10 py-6 mb-8">
      <div className="flex flex-col gap-5">
        <Header />
        <Achievements />
        <AboutMeText />
      </div>
      <Avatar />
    </section>
  );
}
