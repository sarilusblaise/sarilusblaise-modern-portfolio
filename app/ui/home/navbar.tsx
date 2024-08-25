"use client";
//import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useShowNav } from "@/app/layout";
import ToggleMenu from "@/app/ui/home/toggle-menu";
import NavbarMobile from "./navbar-mobile";


export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const {isShowNav, setIsShowNav} = useShowNav()

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const handleClickLink = () => {
		setIsShowNav(false)
	}
	return (
    <header ref={ref} className=" font-bold w-screen">
      <NavbarMobile />
      <div
        className={`fixed z-[9999] w-full inset-x-0 top-0 ${
          !isShowNav && "backdrop-blur"
        } sm:backdrop-blur duration-200 border-b  ${
          isIntersecting || isShowNav
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-base-200 "
        }`}
      >
        <div className="container min-w-full flex flex-row-reverse  items-center justify-between p-4 md:px-16 mx-auto">
          <ToggleMenu />
          <Link
            href=""
            className=" hidden sm:flex btn  btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            locale={false}
            download
          >
            download my cv
          </Link>
          <div className=" justify-between gap-8 hidden sm:flex">
            <Link
              href="/about"
              className="duration-200 hover:text-info hover:border-b hover:border-b-info"
              onClick={handleClickLink}
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="duration-200 hover:text-info hover:border-b hover:border-b-info"
              onClick={handleClickLink}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="duration-200 hover:text-info hover:border-b hover:border-b-info"
              onClick={handleClickLink}
            >
              Contact
            </Link>
          </div>

          <Link
            href="/"
            className="duration-200 font-extrabold  hover:text-zinc-100"
          >
            sarilusblaise
          </Link>
        </div>
      </div>
    </header>
  );
};
