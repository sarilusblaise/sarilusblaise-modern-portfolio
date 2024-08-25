import React from 'react'
import Link from 'next/link'
import { type ProjectInfo } from '@/app/lib/projectData'
export default function ProjectCard({name,description,code, demo, stacks}:ProjectInfo) {

  
  return (
    <div className="card bg-base-300 w-full sm:w-96  shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="flex flex-row flex-wrap gap-1">
          {stacks.map((stack, index) => {
            return (
              <div key={stack} className="text-bold ">
                {stack} {index < stacks.length - 1 && "|"}
              </div>
            );
          })}
        </div>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">gitHub</button>
          <button className="btn btn-primary">demo</button>
        </div>
      </div>
    </div>
  );
}
