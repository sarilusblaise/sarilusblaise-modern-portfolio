import React from 'react'
import Link from 'next/link'
import { type ProjectInfo } from '@/app/lib/projectData'
export default function ProjectCard({name,description,code, demo, stacks}:ProjectInfo) {

  
  return (
    <div className='text-zinc-500
     border-zinc-700 border-[.25px] border-solid rounded-lg p-4 flex flex-col  gap-8 text-lg' >
        <div>
            <h3 className='text-3xl font-semibold'>{name}</h3>
        <p>{description}</p>
        </div>
        
        <div className='flex flex-row gap-4'>
          {
            stacks.map((stack)=>{
              return <span key={stack} className='bg-green-700 text-white p-2 rounded-sm'>{stack}</span>
            })
          }
        </div>
        <div>
            <Link href={code}>gitHub</Link>
            <Link href={demo}>demo</Link>
        </div>
    </div>
  )
}
