import React from 'react'
import Link from 'next/link'
import { type ProjectInfo } from '@/app/lib/projectData'
export default function ProjectCard({name,description,code, demo, stacks}:ProjectInfo) {

  
  return (
    <div
      key={name}
      className="
     border-zinc-700 border-[.25px] border-solid rounded-lg p-4 flex-auto flex flex-col  gap-8 text-lg"
    >
      <div>
        <h3 className="text-3xl font-semibold">{name}</h3>
        <p className="">{description}</p>
      </div>

      <div className="flex flex-row flex-wrap gap-1">
        {stacks.map((stack, index) => {
          return (
            <div key={stack} className="text-bold ">
              {stack} {index < stacks.length - 1 && "|"}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-4">
        <Link
          className="px-4 py-2 bg-sky-700 rounded-md  hover:bg-sky-600 transition"
          href={code}
        >
          gitHub
        </Link>
        <Link
          className="px-4 py-2 bg-sky-700 rounded-md   hover:bg-sky-600 transition"
          href={demo}
        >
          demo
        </Link>
      </div>
    </div>
  );
}
