import { Link, Text } from '@chakra-ui/react'
import useNavItem from './useNavItem'
import { Link as RouterLink } from 'react-router-dom'
import { useNavbarContext } from '../Context'

function MobileItemSubNav({ label, href }) {
  const {
    match,
    borderColor,
    color,
    matchColor
  } = useNavItem({ href })
  const { onToggle: toggleMobileNav } = useNavbarContext()

  return (
    <Link
      as={RouterLink}
      to={href ?? '#'}
      pl={6} key={label} py={2} href={href} w='full' borderStyle='solid'
      borderColor={match ? 'pink.500' : borderColor}
      borderLeftWidth={3}
      ml='-3px'
      color={match ? matchColor : color}
      _dark={{ _hover: { bg: !match && 'blackAlpha.300' }, bg: match && 'pink.900' }}
      _light={{ _hover: { bg: !match && 'blackAlpha.100' }, bg: match && 'pink.50' }}
      borderRightRadius='lg'
      onClick={toggleMobileNav}
    >
      <Text noOfLines={1}>
        {label}
      </Text>
    </Link>
  )
}

export default MobileItemSubNav
