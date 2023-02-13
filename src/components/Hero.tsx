import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import me from "../../public/eu.jpeg";

export function Hero() {
  const text = [
    "Ricardo Martins",
    "Desenvolvedor Web Full-Stack",
    "<CodeSleepEatRepeat />",
  ];

  return (
    <div
      className="
      flex flex-col items-center justify-center h-screen
      text-center p-10  space-y-8 overflow-hidden z-10"
    >
      <BackgroundCircles />
      <Image
        className="w-28 h-28 rounded-full mx-auto"
        src={me}
        alt="Minha foto"
      />
      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[0.7rem]">
          Desenvolvedor Web
        </h2>
        <h1 className="md:text-5xl sm:text-3xl py-2 lg:text-6xl font-semibold scroll-px-10">
          <Typewriter
            words={text}
            loop={true}
            cursor={true}
            cursorColor={"#4db5ff"}
            typeSpeed={120}
          />
        </h1>
      </div>
      <div className="flex items-center flex-wrap justify-center z-10">
        <Link href={"#about"}>
          <button className=" menuButton">About</button>
        </Link>

        <Link href={"#experiences"}>
          <button className=" menuButton">Experiences</button>
        </Link>

        <Link href={"#skils"}>
          <button className=" menuButton">Skills</button>
        </Link>

        <Link href={"#projects"}>
          <button className=" menuButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}
