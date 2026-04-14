import Header from "./Header";

export default function Hero() {
  return (
    <section className="grid grid-cols-[80%_20%] w-full bg-jade px-10 py-6 mb-8">
      <div>
        <Header />
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
