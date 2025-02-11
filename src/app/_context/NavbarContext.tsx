'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface NavbarContextType {
  isOpen: boolean
  toggleNavbar: () => void
  closeNavbar: () => void
}

const NavbarContext = createContext<NavbarContextType | null>(null)

export const useNavbar = () => {
  console.log('useNavbarの呼び出し')
  const context = useContext(NavbarContext)
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider')
  }
  return context
}

interface NavbarProviderProps {
  children: ReactNode
}

export const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => setIsOpen((prev) => !prev)
  const closeNavbar = () => setIsOpen(false)

  return (
    <NavbarContext.Provider value={{ isOpen, toggleNavbar, closeNavbar }}>
      {children}
    </NavbarContext.Provider>
  )
}
