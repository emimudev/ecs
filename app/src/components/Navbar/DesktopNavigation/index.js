import { Stack } from '@chakra-ui/react'

import { NAV_ITEMS } from '../nav-items'
import DesktopNavItem from './DesktopNavItem'

function DesktopNavigation() {
  return (
    <Stack direction='row' spacing={2}>
      {NAV_ITEMS.map((navItem, index) => (
        <DesktopNavItem key={index} navItem={navItem} />
      ))}
    </Stack>

  )
}

export default DesktopNavigation
