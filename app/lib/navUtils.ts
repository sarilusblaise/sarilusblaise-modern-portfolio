import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef, useCallback, useEffect } from 'react'
import { CustomEase } from "gsap/CustomEase"

export function showNav() {
    gsap.to("#nav-overlay", {
            keyframes: [
            {autoAlpha: 1, xPercent: 0, duration: 0.5,ease:'hop'}, // create a 0.5 second gap
					{ xPercent: 100, delay: 0.25, duration: 0.5, ease:'hop'} 
				],

			});
			gsap.to("#mob-nav", { autoAlpha: 1, xPercent: 0, duration: 0, delay: 0.9 })
			
			gsap.to(".mob-link", { duration: 0.5, y:0, stagger: 0.2,delay:0.5, ease: "hop"})

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


/*export const useThrottle = <T extends (...args: any[]) => void>(
  handler: T,
  delay: number
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const throttledHandler = useCallback((...args: Parameters<T>) => {
    if (!timeoutRef.current) {
      handler(...args);
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
      }, delay);
    }
  }, [handler, delay]);

  // Clear the timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return throttledHandler;
};*/

export const useThrottle = <T extends (...args: any[]) => void>(
  handler: T,
  delay: number
) => {
  const isHandlerRunning = useRef(false); // Flag to track if the handler is already running
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const throttledHandler = useCallback((...args: Parameters<T>) => {
    if (!isHandlerRunning.current) {
      isHandlerRunning.current = true; // Set the flag to indicate that the handler is running
      handler(...args);
      timeoutRef.current = setTimeout(() => {
        isHandlerRunning.current = false; // Reset the flag after the delay
      }, delay);
    }
  }, [handler, delay]);

  // Clear the timeout and reset the flag on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      isHandlerRunning.current = false; // Reset the flag when unmounting
    };
  }, []);

  return throttledHandler;
};






