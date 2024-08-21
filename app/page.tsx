'use client'
import React from 'react'
import { useEffect, useRef } from 'react';
import Hero from '@/app/ui/home/hero'
 import Link from "next/link";
 import Particles from '@/app/ui/home/particule';
 import HeroTitle from './ui/home/heroTitle';


const navigation = [
  { name: "about", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const socialLink = [
  { name: "github", href: "/github" },
  { name: "twitter", href: "/twitter" },
  { name: "linkdin", href: "/linkdin" },
];


export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden ">
      <Particles
        className="absolute inset-0 -z-20 animate-fade-in"
        quantity={100}
      />

      <HeroTitle />

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-neutral via-base-content to-neutral" />
      <div className="my-16 animate-fade-in z-10">
        <ul className="flex items-center justify-center gap-4">
          {socialLink.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500  hover:text-info"
            >
              {item.name} |
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );

}






























































































































































































































































































































































































































































































