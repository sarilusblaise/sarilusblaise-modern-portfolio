import React from 'react'
import {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from "gsap/TextPlugin";
import { useShowNav } from '@/app/layout';
import { CustomEase } from "gsap/CustomEase"
import { useThrottle } from '@/app/lib/navUtils';
import { type CallbackFunction } from '@/app/lib/navUtils';

gsap.registerPlugin(useGSAP,CustomEase);
export default function ToggleMenu() {
  const { isShowNav, setIsShowNav } = useShowNav()
  CustomEase.create("hop", "M0,0 C0,0 0.187,-0.027 0.281,0.066 0.562,0.347 1,1 1,1 ")
  useGSAP(()=>{
    //gsap.to(".toggle-bar", {scaleX: 0.2});
    if (isShowNav) {
      gsap.set('#button-close', {rotation:0})
    gsap.to('#button-close', { rotation: -180, duration:0.5, ease:'power1.inOut'})
    } else {
       gsap.set('#button-open', {rotation:0})
    gsap.to('#button-open', { rotation: 360, duration:0.5, ease:'power1.inOut'})
    }
  },{ dependencies: [isShowNav]})

  const  handleOpenNav = () => {
    setIsShowNav(true)
    
  }
  const  handleCloseNav = ()=>{
    setIsShowNav(false)
    
  }

  // Throttle the event handler with a delay of 500 milliseconds
  const throttleOpenNav = useThrottle(handleOpenNav, 5000);
  const throttleCloseNav = useThrottle(handleCloseNav, 5000);
  if (!isShowNav) {
    return (
      <button className='sm:hidden' onMouseEnter={() => gsap.to(".toggle-bar", { scaleX: 1.2, ease: "power1.inOut" })} onMouseLeave={() => gsap.to(".toggle-bar", { scaleX: 1, ease: "power1.inOut" })} onClick={throttleOpenNav}>
        <div id='button-open' key='button-open'  title='Toggle menu' className='flex flex-col gap-[3px] justify-center items-end  bg-gray-700 w-8 h-8 rounded-[50%] p-1' >
      
        <div  className='w-[80%]  bg-slate-300 h-[2.5px]'></div>
        <div className='w-[60%] toggle-bar bg-slate-300 h-[2px]'></div>
        <div className='w-[80%] bg-slate-300 h-[2.5px]'></div>
    </div>
     </button>
  )
  }
  return (
    
    <button key='button-close'  className='sm:hidden' title='Toggle menu' onClick={throttleCloseNav} >
      <div id='button-close' className=' flex relative flex-col gap-[3px] justify-center items-center  bg-gray-700 w-8 h-8 rounded-[50%] p-1'>
        <div className='w-[60%] absolute  bg-slate-300 h-[1.5px] rotate-45'></div>
					<div className='w-[60%] absolute  bg-slate-300 h-[1.5px] -rotate-45'></div>
      </div>
					
				    </button>
				
  )
}
