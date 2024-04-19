import React from 'react'
import {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP,TextPlugin);
export default function ToggleMenu() {
  useGSAP(()=>{
    //gsap.to(".toggle-bar", {scaleX: 0.2});
  })
  return (
    <button title='Toggle menu' className='flex flex-col gap-[3px] justify-center items-end sm:hidden bg-gray-700 w-8 h-8 rounded-[50%] p-1' onMouseEnter={()=> gsap.to(".toggle-bar", {scaleX: 1.2})} onMouseLeave={()=> gsap.to(".toggle-bar", {scaleX: 1})}>
        <div className='w-[80%]  bg-slate-300 h-[2.5px]'></div>
        <div className='w-[60%] toggle-bar bg-slate-300 h-[2px]'></div>
        <div className='w-[80%] bg-slate-300 h-[2.5px]'></div>
    </button>
  )
}
