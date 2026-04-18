import Header from "./Header";
import AchievementsCard from "./ui/AchievementsCard";

export default function Hero() {
  return (
    <section className="grid grid-cols-[80%_20%] w-full bg-jade px-10 py-6 mb-8">
      <div className="flex flex-col gap-4">
        <Header />
        <div className="flex justify-between px-2">
          <AchievementsCard value="5+" title="years of experience" />
          <AchievementsCard value="4" title="languages spoken" />
          <AchievementsCard value="500+" title="hours taught" />
        </div>
      </div>

      <div>
        {/* <Image
          src={avatar2}
          alt="avatar"
          width={200}
          height={260}
          // placeholder="blur"
          className="object-cover w-auto h-auto"
        /> */}
      </div>
    </section>
  );
}
