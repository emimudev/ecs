import { Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { MdClose, MdMenu } from 'react-icons/md'
import { useNavbarContext } from '../Context'

function MobileNavTrigger() {
  const { isMobileOpen, onToggle } = useNavbarContext()

  const toggleIcon = isMobileOpen
    ? <Icon w={6} h={6} as={MdClose} />
    : <Icon w={6} h={6} as={MdMenu} />

  return (
    <IconButton
      onClick={onToggle}
      icon={toggleIcon}
      variant='solid'
      size={useBreakpointValue({ base: 'sm', md: 'md' })}
      p={0}
      aria-label='Toggle Navigation'
    />
  )
}

export default MobileNavTrigger
