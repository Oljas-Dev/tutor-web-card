export default function AchievementsCard({
  value,
  title,
}: {
  value: string;
  title: string;
}) {
  return (
    <div className="w-40 h-45 flex flex-col bg-jade text-center rounded-xl overflow-hidden shadow-[3px_3px_3px_var(--shadow-dark-card),-3px_-3px_3px_var(--shadow-light)]">
      <div className="flex-1 flex-center">
        <p className="text-7xl">{value}</p>
      </div>
      <div className="h-10 flex-center bg-amber-400 border-t-3 border-jade-light">
        <p>
          <strong>{title}</strong>
        </p>
      </div>
    </div>
  );
}
