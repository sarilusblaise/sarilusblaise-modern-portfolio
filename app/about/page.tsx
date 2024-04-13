import React from 'react'
import Typewriter from '@/app/ui/about/type-writer'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP,TextPlugin);


export default function AboutPage() {
  return (
    <section className='flex flex-col items-center justify-center p-8 mt-32'>
      <h1 className='text-zinc-500 text-[3rem] sm:text-[4rem] md:text-[5rem] text-center font-bold '>About Me</h1>
      <Typewriter/>
    </section>
  )
}
