import Stars from "./ui/Stars";

export default function Header() {
  return (
    <>
      <div className="flex items-center gap-8">
        <h1>Kate Decker</h1>
        <Stars />
      </div>
      <p className="font-semibold">tutor@email.com</p>
    </>
  );
}
