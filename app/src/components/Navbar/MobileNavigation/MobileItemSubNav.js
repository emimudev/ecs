import { Link, Text } from '@chakra-ui/react'
import useNavItem from './useNavItem'
import { Link as RouterLink } from 'react-router-dom'

function MobileItemSubNav({ label, href }) {
  const {
    match,
    borderColor,
    color,
    matchColor
  } = useNavItem({ href })

  return (
    <Link
      as={RouterLink}
      to={href ?? '#'}
      pl={6} key={label} py={2} href={href} w='full' borderStyle='solid'
      borderColor={match ? 'blue.500' : borderColor}
      borderLeftWidth={3}
      ml='-3px'
      color={match ? matchColor : color}
      _dark={{ _hover: { bg: !match && 'blackAlpha.300' }, bg: match && 'blue.900' }}
      _light={{ _hover: { bg: !match && 'blackAlpha.100' }, bg: match && 'blue.50' }}
      borderRightRadius='lg'
    >
      <Text noOfLines={1}>
        {label}
      </Text>
    </Link>
  )
}

export default MobileItemSubNav
