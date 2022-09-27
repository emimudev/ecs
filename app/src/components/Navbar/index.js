import { Box, Flex, Spacer, useColorModeValue } from '@chakra-ui/react'
import MobileNavigation from './MobileNavigation'
import Brand from '../Brand'
import NavbarContextProvider from './Context'
import DesktopNavigation from './DesktopNavigation'
import UserHud from './UserHud'
import AuthPopup from 'components/AuthPopup'

export default function Navbar() {
  return (
    <NavbarContextProvider>
      <NavBarContainer>
        <NavbarFlex>
          <Brand />
          <Flex display={{ base: 'none', lg: 'flex' }} ml='10px'>
            <DesktopNavigation />
          </Flex>
          <Spacer />
          <UserHud />
        </NavbarFlex>
        <MobileNavigation />
      </NavBarContainer>
      <AuthPopup />
    </NavbarContextProvider>
  )
}

const NavBarContainer = ({ children }) => {
  return (
    <Box
      position='sticky'
      top={0}
      left={0}
      right={0}
      _light={{ bg: 'rgba(255, 255, 255, 0.85)' }}
      _dark={{ bg: 'rgba(26, 32, 44, 0.85)' }}
      backdropFilter='saturate(180%) blur(6px)'
      zIndex='sticky'
    >
      {children}
    </Box>
  )
}

const NavbarFlex = ({ children }) => {
  return (
    <Flex
      color={useColorModeValue('gray.600', 'white')}
      height='navbar'
      overflow='hidden'
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle='solid'
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align='center'
      gap='10px'
    >
      {children}
    </Flex>
  )
}
