import { createContext, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'

const NavbarContext = createContext()

export default function NavbarContextProvider({ children }) {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <NavbarContext.Provider value={{ isMobileOpen: isOpen, onToggle }}>
      {children}
    </NavbarContext.Provider>
  )
}

export function useNavbarContext() {
  const context = useContext(NavbarContext)
  if (context === undefined) {
    throw new Error('NavbarContext must be used within a NavbarContextProvider')
  }
  return context
}
