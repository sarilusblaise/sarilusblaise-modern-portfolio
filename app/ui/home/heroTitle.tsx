'use client'
import { useEffect, useRef } from 'react'
import React from 'react'

export default function HeroTitle() {
    const heroTextRef1 = useRef<SVGTextElement | null>(null)
    const heroTextRef2 = useRef<SVGTextElement | null>(null)
    const heroTextRef3 = useRef<SVGTextElement | null>(null)
    useEffect(() => {
         heroTextRef1.current?.classList.add('hero-title2') // Trigger the animation
        heroTextRef2.current?.classList.add('hero-title') 
         heroTextRef3.current?.classList.add('hero-title2') 
  return () => {
    heroTextRef1.current?.classList.remove('hero.title')
    ; // Reset to the initial value
  };
}, []);


  return (
    <svg
      className="mt-32"
      viewBox="0 0 1600 460"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        ref={heroTextRef1}
        className=" text-warning text-[9rem] sm:text-[11rem] font-bold fill-warning stroke-warning stroke-[3] tracking-[-2px]"
        x="50%"
        y="30%"
        textAnchor="middle"
      >
        Full-Stack
      </text>
      <text
        ref={heroTextRef2}
        className=" text-base-content text-[7rem] text-wrap  fill-base-content stroke-base-content before:stroke-[3] font-normal tracking-[-2px]"
        x="50%"
        y="50%"
        textAnchor="middle"
      >
        Sarilus BLondy Wadley
      </text>
      <text
        ref={heroTextRef3}
        className=" text-warning text-[9rem] sm:text-[11rem] font-bold fill-warning stroke-warning stroke-[3] tracking-[-2px]"
        x="50%"
        y="80%"
        textAnchor="middle"
      >
        Developer
      </text>
    </svg>
  );
}
