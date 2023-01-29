import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export function Hero() {
  const text = [
    "<CodeSleepEatRepeat />",
    "Ricardo Martins",
    "Desenvolvedor Web Full-Stack",
  ];

  return (
    <motion.div
      className=" text-center p-10  pb-[200px]"
      initial={{ opacity: 0.5, y: -500, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: [0.6, 0.9, 1] }}
      transition={{ duration: 2.3 }}
    >
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
    </motion.div>
  );
}
