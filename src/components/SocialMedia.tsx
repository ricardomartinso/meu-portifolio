import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

export function SocialMedia(): JSX.Element {
  return (
    <div
      id="redes-sociais"
      className="
      flex 
      items-center 
      justify-center 
      gap-8 text-4xl 
      text-primary"
    >
      <a
        href="https://www.linkedin.com/in/ricardomartinso/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://www.github.com/ricardomartinso"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.instagram.com/ricardoomartins_"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram />
      </a>
    </div>
  );
}
