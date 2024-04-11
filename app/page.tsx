'use client'
import React from 'react'
import { useEffect, useRef } from 'react';
import Hero from '@/app/ui/home/hero'
 import Link from "next/link";
 import Particles from '@/app/ui/home/particule';

 // ===== gsap=====
 import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
   


const navigation = [
  { name: "about", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const socialLink = [
  { name: "github", href: "/github" },
  { name: "twitter", href: "/twitter" },
  { name: "linkdin", href: "/linkdin" },
];


export default function Home() {
  const heroTitle = useRef();
  useGSAP(()=>{
    
  })
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in z-10">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-20 animate-fade-in"
        quantity={60}
      />
  
      <h1 ref={heroTitle} className="z-10 text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text flex flex-col text-center ">
       <span className='text-6xl sm:text-8xl text-zinc-500 md:text-9xl font-semibold'>Full-Stack</span> 
        <span>Sarilus Blondy Wadley</span>
        <span className='text-6xl sm:text-8xl md:text-9xl font-semibold text-zinc-500'>Developer</span> 
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 animate-fade-in z-10">
        <ul className="flex items-center justify-center gap-4">
          {socialLink.map((item,index) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name} |
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );

}






























































































































































































































































































































































































































































































