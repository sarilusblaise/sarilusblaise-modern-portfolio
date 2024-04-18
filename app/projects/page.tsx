
import React from 'react'
import ProjectCards from '@/app/ui/projects/projectCards'

export default function ProjectsPage() {
  return (
    <section className='text-zinc-500 flex flex-col items-center   gap-16 p-4 sm:p-8 md:p-16 mt-32'>
      <div>
        <h1 className='text-[3rem] sm:text-[4rem] md:text-[5rem]  font-bold '>Projects</h1>
      <p className='text-l md:w-4/6 lg:w-3/6'>I have a passion for building robust, user-friendly applications that solve real-world problems. Each project listed here represents a unique challenge that I was able to tackle with my skills and expertise using a various of technologies.</p>
      </div>
      
      <div className="  w-screen h-px animate-glow  bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"></div>
      
      <ProjectCards/>
      
    </section>
  )
}
