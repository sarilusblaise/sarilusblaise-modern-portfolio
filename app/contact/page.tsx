import React from 'react'
import ContactForm from '@/app/ui/contact/form'
export default function Contact() {
  return (
  <section className='text-zinc-500 flex flex-col items-start w-screen  gap-16 p-4 sm:p-8 md:p-16 mt-32'>
      <div>
        <h1 className='text-[3rem] sm:text-[4rem] md:text-[5rem]  font-bold '>Contact</h1>
      <p className='text-l md:w-4/6 lg:w-3/6'>"I'm open to new opportunities to collaborate on exciting projects and join innovative teams. Feel free to reach out if you'd like to learn more about me and my work!"</p>
      </div>
      
      <div className="  w-full h-px animate-glow  bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"></div>
      <ContactForm/>
    </section>
  )
}
