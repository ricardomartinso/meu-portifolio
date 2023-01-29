import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

export function SocialMedia(): JSX.Element {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="redes-sociais"
      className="
      flex 
      items-center 
      justify-center 
      gap-8 text-2xl 
      text-white"
    >
      <Link
        href="https://www.linkedin.com/in/ricardomartinso/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </Link>
      <Link
        href="https://www.github.com/ricardomartinso"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </Link>
      <Link
        href="https://www.instagram.com/ricardoomartins_"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram />
      </Link>
    </motion.div>
  );
}
