'use client'
import React from 'react'
import {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP,TextPlugin);
export default function TypeWriter() {
	const typeWriterRef = useRef<HTMLSpanElement>(null)
	const cursorRef = useRef<HTMLSpanElement>(null)

  useGSAP(()=>{
    const words = [ "Fullstack Developer",
    "React Enthusiast",
    "Next.js Lover",
    "Firebase lover",
    "Passionate Learner",
    "Problem Solver",
    "Team Player",
    "Innovative Thinker", ]

		//Main timeline
		let mainTimeline = gsap.timeline( {
			repeat: -1
		} )

		// For each word , create a new timeline, use the  Text plugin, then append that timeline to the main one .
		words.forEach( word => {
			let textTimeline = gsap.timeline( {
				repeat: 1,
				yoyo: true,
				repeatDelay: 0.5


			} );
			textTimeline.to( typeWriterRef.current, {
				text: word,
				duration: 2
			} )
			onUpdate: () => {
				cursorTimeline.restart();
				cursorTimeline.play();
			}

			onComplete: () => {
				cursorTimeline.play()
			}

			mainTimeline.add( textTimeline );

		} )

		const cursorTimeline = gsap.timeline( {
			repeat: -1,
			repeatDelay: 0.8,
		} );

		cursorTimeline.to( cursorRef.current, {
			opacity: 1,
			duration: 0,
		} ).to( cursorRef.current, {
			opacity: 0,
			duration: 0,
			delay: .8
		} )
  }
  )
  return (
<p className='text-zinc-500 text-3xl'> <span className=' text-sky-600 font-bold'>I am a</span> <span ref={typeWriterRef} className=''></span><span ref={cursorRef}>|</span></p>
  )
}
