import { Flex } from '@chakra-ui/react'

import { NAV_ITEMS } from '../nav-items'
import DesktopNavItem from './DesktopNavItem'

function DesktopNavigation() {
  return (
    <Flex direction='row' gap={2}>
      {NAV_ITEMS.map((navItem, index) => (
        <DesktopNavItem key={index} navItem={navItem} />
      ))}
    </Flex>

  )
}

export default DesktopNavigation
