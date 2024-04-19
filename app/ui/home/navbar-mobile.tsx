import React from 'react'
import Link from 'next/link'
export default function NavbarMobile() {
  return (
    <div className=" justify-between flex flex-col p-16 items-center absolute z-[60] w-screen top-0 left-0 h-screen bg-zinc-900 sm:hidden backdrop-blur">
		<Link href="/about" className="duration-200 hover:text-zinc-100">
			About Me
		</Link>
		<Link href="/projects" className="duration-200 hover:text-zinc-100">
			Projects
		</Link>
		<Link href="/contact" className="duration-200 hover:text-zinc-100">
			Contact
		</Link>
	</div>
  )
}
