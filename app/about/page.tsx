import React from 'react'
import Typewriter from '@/app/ui/about/type-writer'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP,TextPlugin);


export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-16 p-4 sm:p-8 md:p-16 mt-32">
      <div className="flex flex-col w-full">
        <h1 className=" text-[3rem] sm:text-[4rem] md:text-[5rem]  font-bold ">
          About Me
        </h1>

        <Typewriter />
      </div>
      <div className="  w-screen h-px animate-glow  bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"></div>

      <article className="flex flex-col gap-8 justify-center   items-center text-xl">
        <p>
          As a seasoned full-stack web developer, I specialize in crafting
          dynamic and intuitive web experiences using cutting-edge technologies.
          With an extensive skill set that encompasses React, Next.js, Firebase,
          MongoDB, and Express.js, I have a proven track record of delivering
          robust and scalable solutions tailored to meet the unique needs of
          each project.
        </p>
        <p>
          My journey into programming began during my civil engineering studies
          when I discovered the power and versatility of Python while tackling
          academic assignments. Since then, my passion for programming has only
          grown stronger, driving me to dive deeper into the world of web
          development.My proficiency extends beyond coding to encompass the
          seamless integration of tools like Git and GitHub into my workflow,
          ensuring efficient collaboration and version control throughout the
          development lifecycle.
        </p>

        <p>
          Driven by an insatiable thirst for knowledge and a love for overcoming
          challenges, I thrive in the dynamic and ever-evolving landscape of
          technology. I find immense satisfaction in the continuous learning
          process, which fuels my commitment to making each day purposeful and
          rewarding.
        </p>

        <p>
          My background in civil engineering has endowed me with a solid
          foundation in mathematics, facilitating rapid absorption of complex
          concepts such as data structures and algorithms—cornerstones of
          computer science. I actively engage in honing my skills through
          platforms like HackerRank, where I tackle coding challenges to sharpen
          my problem-solving abilities.
        </p>
        <p>
          Beyond my professional pursuits, I serve as a volunteer logistics
          manager within my local community, underscoring my dedication to
          making a positive impact beyond the realm of technology. In my
          development journey, I've conceptualized and developed several
          small-scale applications while also contributing to collaborative
          projects—a testament to my drive for continuous improvement.
        </p>
        <p>
          While programming occupies a significant portion of my life, I
          maintain a healthy work-life balance by engaging in diverse interests.
          I find solace and mental stimulation in activities such as chess,
          soccer, and fitness endeavors. Above all, I cherish quality time spent
          with my loved ones, recognizing the importance of nurturing meaningful
          connections beyond the digital realm.
        </p>
      </article>
    </section>
  );
}
