'use client'
import React from 'react'
import { useState, createContext, useContext } from 'react'

type navToggleStateType = { isShowNav: boolean, setIsShowNav: React.Dispatch<React.SetStateAction<boolean>> }
const navToggleState:navToggleStateType = {isShowNav: false, setIsShowNav:()=> false }
const navToggleContext = createContext<navToggleStateType>(navToggleState)

export default function NavbarProvider({ children }: { children: React.ReactNode }) {
    const [isShowNav, setIsShowNav] = useState<boolean>(false)
    
    return (
        <navToggleContext.Provider value={{isShowNav, setIsShowNav}
}>
            {children}
      </navToggleContext.Provider>
  )
}

// custom hook 
export function useShowNav(){
    return useContext(navToggleContext)
}