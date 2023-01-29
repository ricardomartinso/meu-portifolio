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

      <main className="bg-main min-h-screen px-8 text-slate-100 min-w-full w-full">
        {/* Header */}
        <Header />

        {/* Front page */}
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>

        {/* About me */}
        <section id="about" className="min-h-screen">
          About
        </section>

        {/* Experiences */}
        <section id="experiences" className="min-h-screen">
          Experiences
        </section>

        {/* Skills */}
        <section id="skills" className="min-h-screen">
          Skills
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen">
          Projects
        </section>

        {/* Contact Me */}
        <section id="contact" className="min-h-screen">
          Contact Me
        </section>
      </main>
    </>
  );
}
