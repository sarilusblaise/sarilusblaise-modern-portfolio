'use client'
import React from 'react'
import Link from 'next/link'
import { useShowNav } from '@/app/lib/navbarContext';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP,TextPlugin);
export default function NavbarMobile() {
	const { isShowNav, setIsShowNav } = useShowNav()
	useGSAP(() => {
		gsap.set('.mob-nav', {xPercent:-100})
		if (isShowNav) {
			gsap.to(".mob-nav", {autoAlpha:1, xPercent: 0, duration: 1, ease: "power1.inOut" })
			console.log('gsap show nav')
		} 

	},{ dependencies: [isShowNav]})
	
	

  
	
  return (
    <div id='mob-nav' className=" mob-nav justify-between flex flex-col p-16 items-center absolute z-[60] w-screen top-0 left-0  h-screen bg-zinc-900 sm:hidden invisible last:backdrop-blur">
		<Link href="/about" className="duration-200 hover:text-zinc-100">
			About Me
		</Link>
		<Link href="/projects" className="duration-200 hover:text-zinc-100">
			Projects
		</Link>
		<Link href="/contact" className="duration-200 hover:text-zinc-100">
			Contact
		</Link>
	</div>
  )
}
