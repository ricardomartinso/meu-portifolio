import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  const text = [
    "<CodeSleepEatRepeat />",
    "Ricardo Martins",
    "Desenvolvedor Web Full-Stack",
  ];

  return (
    <div className=" text-center p-10 ">
      <h2 className=" text-5xl py-2 ">
        <Typewriter
          words={text}
          loop={true}
          cursor={true}
          cursorColor={"#4db5ff"}
          typeSpeed={120}
        />
      </h2>

      <p className=" text-md py-2 ">
        Olá, me chamo Ricardo e este é meu portfólio, ofereço serviços com a
        programação. Disponível para contato nos ícones abaixo.
      </p>
    </div>
  );
}
