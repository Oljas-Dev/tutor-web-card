import avatar from "../../assets/avatar.png";

export default function Avatar() {
  return (
    <div className="flex flex-col items-end">
      <p className="text-5xl font-bold text-center text-jade-light -my-3 px-3">
        english <br /> teacher
      </p>
      <div className="flex-center bg-peach w-50 h-50 p-3 rounded-2xl shadow-[3px_3px_3px_var(--shadow-dark-card),-3px_-3px_3px_var(--shadow-light)] border-t-2 border-l-2 border-t-stroke-light border-l-stroke-light">
        <img
          src={avatar}
          alt="Teacher Avatar"
          className="w-44 h-44 object-cover rounded-xl "
        />
      </div>
    </div>
  );
}
