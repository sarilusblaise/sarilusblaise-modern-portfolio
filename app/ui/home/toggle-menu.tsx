import React from 'react'
import {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from "gsap/TextPlugin";
import { useShowNav } from '@/app/lib/navbarContext';

gsap.registerPlugin(useGSAP,TextPlugin);
export default function ToggleMenu() {
  const {isShowNav, setIsShowNav} = useShowNav()
  useGSAP(()=>{
    //gsap.to(".toggle-bar", {scaleX: 0.2});
  })

  function handleClick() {
    setIsShowNav(!isShowNav)
  }
  return (
    <button title='Toggle menu' className='flex flex-col gap-[3px] justify-center items-end sm:hidden bg-gray-700 w-8 h-8 rounded-[50%] p-1' onMouseEnter={()=> gsap.to(".toggle-bar", {scaleX: 1.2,ease: "power1.inOut"})} onMouseLeave={()=> gsap.to(".toggle-bar", {scaleX: 1,ease: "power1.inOut"})} onClick={() => handleClick()}>
        <div className='w-[80%]  bg-slate-300 h-[2.5px]'></div>
        <div className='w-[60%] toggle-bar bg-slate-300 h-[2px]'></div>
        <div className='w-[80%] bg-slate-300 h-[2.5px]'></div>
    </button>
  )
}
