"use client";
//import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ToggleMenu from "@/app/ui/home/toggle-menu";
import NavbarMobile from "./navbar-mobile";


export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const isShowNav = useState(false)
	

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref} className="text-zinc-400">
			<NavbarMobile/>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<ToggleMenu/>
					<div className=" justify-between gap-8 hidden sm:flex">
						<Link
							href="/about"
							className="duration-200 hover:text-zinc-100"
						>
							About Me
						</Link>
						<Link
							href="/projects"
							className="duration-200 hover:text-zinc-100"
						>
						Projects
						</Link>
						<Link
							href="/contact"
							className="duration-200 hover:text-zinc-100"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						sarilusblaise
					</Link>
					
				</div>
			</div>
		</header>
	);
};
