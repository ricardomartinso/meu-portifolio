import Head from "next/head";
import { SocialMedia } from "@/components/SocialMedia";
import { About } from "@/components/About";
import { Navigation } from "@/components/Navigation";
import { Experiences } from "@/components/Experiences";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricardo Martins Portfólio</title>
        <meta name="description" content="Portfólio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="
      bg-main min-h-screen max-w-full 
      px-8 text-slate-100"
      >
        <Navigation />
        <div className="flex flex-col items-center ">
          <Menu />
          <section id="about" className="min-h-screen ">
            <About />
            <SocialMedia />
          </section>
          <section id="experiences" className="min-h-screen">
            <Experiences />
          </section>
        </div>
      </main>
    </>
  );
}
