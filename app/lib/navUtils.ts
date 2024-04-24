import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CustomEase } from "gsap/CustomEase"

export function showNav() {
    gsap.to("#nav-overlay", {
            keyframes: [
            {autoAlpha: 1, xPercent: 0, duration: 0.5,ease:'hop'}, // create a 0.5 second gap
					{ xPercent: 100, delay: 0.25, duration: 0.5, ease:'hop'} 
				],

			});
			gsap.to("#mob-nav", { autoAlpha: 1, xPercent: 0, duration: 0, delay: 0.9 })
			
			gsap.to(".mob-link", { duration: 0.8, y:0, stagger: 0.3,delay:0.5, ease: "hop"})

}

export function hideNav() {
    gsap.to("#nav-overlay", {
            keyframes: [
            {autoAlpha: 1, xPercent: 0, duration: 0.5,ease:'hop'}, // create a 0.5 second gap
					{ xPercent: 100, delay: 0.25, duration: 0.5, ease:'hop'} // overlap by 0.25 seconds
				],
				
			});
			
            gsap.set('.mob-link', { y: 0 })
			gsap.set('#mob-nav', { xPercent: 0, })
			gsap.to("#mob-nav", {autoAlpha:0,xPercent:-100,delay:0.5 })
			
}
    
