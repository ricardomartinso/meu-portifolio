import Head from "next/head";
import { SocialMedia } from "@/components/SocialMedia";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Experiences } from "@/components/Experiences";
import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricardo Martins Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        className="
      bg-main text-white h-screen snap-y snap-mandatory overflow-scroll z-0"
      >
        {/* Header */}
        <Header />
        {/* <Menu /> */}
        {/* Front page */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>

        {/* About me */}
        <section id="about" className="">
          About
        </section>

        {/* Experiences */}
        <section id="experiences" className="">
          Experiences
        </section>

        {/* Skills */}
        <section id="skills" className="">
          Skills
        </section>

        {/* Projects */}
        <section id="projects" className="">
          Projects
        </section>

        {/* Contact Me */}
        <section id="contact" className="">
          Contact Me
        </section>
      </main>
    </>
  );
}
