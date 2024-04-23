'use client'
import React from 'react'
import Link from 'next/link'
import { useShowNav } from '@/app/lib/navbarContext';
import Particles from '@/app/ui/home/particule';
import { socialLink } from '@/app/page';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from "gsap/CustomEase"

gsap.registerPlugin(useGSAP,CustomEase);
export default function NavbarMobile() {
	const { isShowNav, setIsShowNav } = useShowNav()
	useGSAP(() => {
		CustomEase.create("hop", "M0,0 C0,0 0.187,-0.027 0.281,0.066 0.562,0.347 1,1 1,1 ")
		gsap.set('#mob-nav', { xPercent: -100 })
		gsap.set('#nav-overlay', { xPercent: -100 , scaleX:1})
		if (isShowNav) {
			gsap.to("#nav-overlay", {
            keyframes: [
            {autoAlpha: 1, xPercent: 0, duration: 0.5,ease:'hop'}, // create a 0.5 second gap
					{ xPercent: 100, delay: 0.25, duration: 0.5, ease:'hop'} // overlap by 0.25 seconds
				],
				

  // ease the entire keyframe block
			});
			gsap.to("#mob-nav", {autoAlpha:1, xPercent: 0,delay:0.75, duration:0, })
			
		} 


	},{ dependencies: [isShowNav]})
	
	

  
	
	return (
	< div className="">
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
				<ul className="flex items-center justify-center gap-4">
					{socialLink.map((item, index) => (
						<Link key={item.href} href={item.href} className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
							{item.name} |
						</Link>
		  ))}
				</ul>
				<Particles
        className="absolute inset-0 -z-20 animate-fade-in"
					quantity={100}
					
      />
			</div>
			<div id='nav-overlay' className='absolute invisible block sm:hidden bg-zinc-950 h-screen w-screen z-[70] top-0 left-0'>

			</div>
	</div>
    
  )
}
