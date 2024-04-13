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
    const words = [ 'create appealing website', 'use API', 'design secure API', 'manage secure database' ]

		//Main timeline
		let mainTimeline = gsap.timeline( {
			repeat: -1
		} )

		// For each word , create a new timeline, use the  Text plugin, then append that timeline to the main one .
		words.forEach( word => {
			let textTimeline = gsap.timeline( {
				repeat: 1,
				yoyo: true,
				repeatDelay: 3


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
<p className='text-zinc-500 text-3xl'> <span className='text-green-600  font-semibold'>I am a full stack developer</span>  I can <span ref={typeWriterRef}></span><span ref={cursorRef}>|</span></p>
  )
}
