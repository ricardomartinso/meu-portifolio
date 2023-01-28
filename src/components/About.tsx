import TypewriterComponent, { TypewriterClass } from "typewriter-effect";

export function About() {
  const typewritter = (typewritter: TypewriterClass) => {
    typewritter
      .typeString("Ricardo Martins")
      .pauseFor(2000)
      .deleteAll()
      .typeString("Desenvolvedor Web Full Stack")
      .pauseFor(1500)
      .deleteAll()
      .start();
  };
  return (
    <div className=" text-center p-10 ">
      <h2 className=" text-5xl py-2 ">
        <TypewriterComponent
          onInit={typewritter}
          options={{ loop: true, autoStart: true }}
        />
      </h2>

      <p className=" text-md py-2 ">
        Olá, me chamo Ricardo e este é meu portfólio, ofereço serviços com a
        programação. Disponível para contato nos ícones abaixo.
      </p>
    </div>
  );
}
