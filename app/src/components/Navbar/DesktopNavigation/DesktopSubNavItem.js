import {
  Box,
  Text,
  Flex,
  Icon,
  Link,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { MdChevronRight } from 'react-icons/md'
import { Link as RouterLink, matchPath, useLocation } from 'react-router-dom'

function DesktopSubNavItem({ label, href, subLabel, onClose = () => { } }) {
  const location = useLocation()
  const match = href && matchPath(href, location.pathname)
  const matchColorStyle = useColorModeValue('pink.500', 'pink.400')
  const matchBgStyle = useColorModeValue('pink.50', 'gray.900')
  const bgHover = useColorModeValue('gray.100', 'gray.700')
  const matchBgHoverStyle = match ? matchBgStyle : bgHover

  return (
    <Link
      role='group'
      as={RouterLink}
      to={href ?? '#'}
      display='block'
      p={2}
      rounded='md'
      bg={match ? matchBgStyle : ''}
      _hover={{ bg: matchBgHoverStyle }}
      onClickCapture={onClose}
    >
      <Stack direction='row' align='center'>
        <Box>
          <Text
            transition='all .2s ease'
            color={match && matchColorStyle}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text noOfLines={2} fontSize='sm'>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition='all .3s ease'
          transform='translateX(-10px)'
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify='flex-end'
          align='center'
          flex={1}
        >
          <Icon color='pink.400' w={5} h={5} as={MdChevronRight} />
        </Flex>
      </Stack>
    </Link>
  )
}

export default DesktopSubNavItem
