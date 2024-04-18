import React from 'react'
import Link from 'next/link'
import { type ProjectInfo } from '@/app/lib/projectData'
export default function ProjectCard({name,description,code, demo, stacks}:ProjectInfo) {

  
  return (
    <div className='text-zinc-500
     border-zinc-700 border-[.25px] border-solid rounded-lg p-4 flex-auto flex flex-col  gap-8 text-lg' >
        <div>
            <h3 className='text-3xl font-semibold'>{name}</h3>
        <p className=''>{description}</p>
        </div>
        
        
        <div className='flex flex-row flex-wrap gap-1'>
          {
            stacks.map((stack)=>{
              return <div key={stack} className=''>{stack}</div>
            })
          }
        </div>
        <div className='flex flex-wrap gap-4'>
            <Link className='' href={code}>gitHub</Link>
            <Link className='' href={demo}>demo</Link>
        </div>
        
    </div>
  )
}
