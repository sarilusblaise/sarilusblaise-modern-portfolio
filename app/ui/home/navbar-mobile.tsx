'use client'
import React from 'react'
import Link from 'next/link'
import { useShowNav } from '@/app/layout';
import Particles from '@/app/ui/home/particule';
import { socialLink } from '@/app/page';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from "gsap/CustomEase"
import { showNav, hideNav } from '@/app/lib/navUtils';

gsap.registerPlugin(useGSAP,CustomEase);
export default function NavbarMobile() {
	const { isShowNav, setIsShowNav } = useShowNav()
	useGSAP(() => {
		CustomEase.create("hop", "M0,0 C0,0 0.187,-0.027 0.281,0.066 0.562,0.347 1,1 1,1 ")
		//gsap.set('#mob-nav',{ xPercent: -100 })
		//gsap.set('#nav-overlay', { xPercent: -100, scaleX: 1 })
		gsap.set('.mob-link', {  y: 24})
		/*if (isShowNav) {
			gsap.to("#nav-overlay", {
            keyframes: [
            {autoAlpha: 1, xPercent: 0, duration: 0.5,ease:'hop'}, // create a 0.5 second gap
					{ xPercent: 100, delay: 0.25, duration: 0.5, ease:'hop'} 
				],

			});
			gsap.to("#mob-nav", { autoAlpha: 1, xPercent: 0, duration: 0, delay: 0.9 })
			
			gsap.to(".mob-link", { duration: 0.8, y:0, stagger: 0.3,delay:0.5, ease: "hop"})}*/
		if (isShowNav) {
				showNav()
			}
	 else {
			hideNav()
			/*gsap.to("#nav-overlay", {
            keyframes: [
            {autoAlpha: 1, xPercent: 0, duration: 0.5,ease:'hop'}, // create a 0.5 second gap
					{ xPercent: 100, delay: 0.25, duration: 0.5, ease:'hop'} // overlap by 0.25 seconds
				],
				

  // ease the entire keyframe block
			});
					gsap.set('.mob-link', {  y: 0})

			gsap.set('#mob-nav', { xPercent: 0, })
			gsap.to("#mob-nav", {autoAlpha:0,xPercent:-100,delay:0.5 })*/
			
		}

		


	},{ dependencies: [isShowNav]})
	
	
	const handleClickLink = () => {
		setIsShowNav(false)
			 hideNav()
		}
  
	
	return (
    <div className="text-base-content">
      <div
        id="mob-nav"
        className=" mob-nav justify-end gap-4 flex flex-col p-2 items-start fixed z-[60] w-screen top-0 left-0  h-screen bg-base-100 sm:hidden invisible last:backdrop-blur"
      >
        <Link
          href="/about"
          className="duration-200 mob-link   hover:translate-x-1 transition-transform text-6xl"
          onClick={handleClickLink}
        >
          About Me
        </Link>
        <Link
          href="/projects"
          className="duration-200 mob-link  hover:text-zinc-100 text-6xl"
          onClick={handleClickLink}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="duration-200 mob-link  hover:text-zinc-100 text-6xl"
          onClick={handleClickLink}
        >
          Contact
        </Link>
        <Link
          href=""
          className="text-zinc-500 mob-link "
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
          download
          onClick={handleClickLink}
        >
          {" "}
          download my cv
        </Link>
        <ul className="flex items-center justify-center mob-link  gap-4">
          {socialLink.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              onClick={handleClickLink}
            >
              {item.name} |
            </Link>
          ))}
        </ul>

        <Particles
          className="absolute inset-0 -z-20 animate-fade-in"
          quantity={100}
        />
      </div>
      <div
        id="nav-overlay"
        className="fixed invisible block sm:hidden bg-base-100 h-screen w-screen z-[70] top-0 left-0"
      ></div>
    </div>
  );
}
