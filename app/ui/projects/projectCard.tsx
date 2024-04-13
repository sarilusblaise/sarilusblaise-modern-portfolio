import React from 'react'

export default function ProjectCard() {
  return (
    <div className='text-zinc-500
     border-zinc-700 border-[.25px] border-solid rounded-lg p-4 flex flex-col  gap-8 text-lg' >
        <div>
            <h3 className='text-3xl font-semibold'>TaskMaster</h3>
        <p>TaskMaster is a user-friendly task management app to help users stay organized, prioritize tasks, and achieve their goals.It is built with React, tailwind css and ESlint.</p>
        </div>
        
        <div className='flex flex-row gap-4'>
            <span className='bg-green-700 text-white p-2 rounded-sm'>React</span>
            <span className='bg-green-700 text-white p-2 rounded-sm'>TailwindCSS</span>
            <span className='bg-green-700 text-white p-2 rounded-sm'>React</span>
        </div>
        <div>
            <span className=''>github</span>
            <span>demo</span>
        </div>
    </div>
  )
}
