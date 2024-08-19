'use client'
import "@/app/ui/globals.css";
import {inter} from '@/app/ui/fonts'
import { Metadata } from "next";
import { Navigation } from "@/app/ui/home/navbar";
import React from 'react'
import { useState, createContext, useContext } from 'react'

// type for context provider
type navToggleStateType = { isShowNav: boolean, setIsShowNav: React.Dispatch<React.SetStateAction<boolean>> }
const navToggleState:navToggleStateType = {isShowNav: false, setIsShowNav:()=> false }
const navToggleContext = createContext<navToggleStateType>(navToggleState)

// custom hook 
export function useShowNav(){
    return useContext(navToggleContext)
}

// metadata for SEO
 const metadata: Metadata = {
  title: {
    default: "Sarilus Blondy Wadley | Full-stack developer",
    template: "%s | Sarilus Blondy Wadley | Full-stack developer",
  },
  description: "Portfolio of Sarilus Blaise : full-stack developer focusing in react , nextjs, typescript , firebase, mongodb, expressjs",
  openGraph: {
    title: "sarilusblaise.com",
    description:
      "Full-stack developer focusing in react , nextjs, typescript , firebase, mongodb, expressjs",
    url: "https://sarilusblaise.com",
    siteName: "sarilusblaise.com",
    images: [
      {
        url: "",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "sarilusblaise",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  const [isShowNav, setIsShowNav] = useState<boolean>(false)
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <head></head>
      <navToggleContext.Provider value={{ isShowNav, setIsShowNav }}>
        <body
          className={` overflow-x-hidden ${
            isShowNav && "overflow-y-hidden"
          } sm:overflow-y-auto`}
        >
          <Navigation />
          {children}
        </body>
      </navToggleContext.Provider>
    </html>
  );
}
