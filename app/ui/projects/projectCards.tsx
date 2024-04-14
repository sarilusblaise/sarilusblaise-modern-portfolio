import React from 'react'
import ProjectCard from '@/app/ui/projects/projectCard'
import { projectsData } from '@/app/lib/projectData'
export default function ProjectCards() {
  return (
    <div className='grid grid-cols-1 gap-8 place-content-start place-items-start md:grid-cols-2'>
        {
            projectsData.map((data)=>{
                return <ProjectCard {...data}/>
            })
        }
        
      </div>
      
  )
}
