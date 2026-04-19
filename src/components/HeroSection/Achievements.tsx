import AchievementsCard from "./ui/AchievementsCard";

export default function Achievements() {
  return (
    <div className="flex justify-between px-2">
      <AchievementsCard value="5+" title="years of experience" />
      <AchievementsCard value="4" title="languages spoken" />
      <AchievementsCard value="500+" title="hours taught" smallText={true} />
    </div>
  );
}
