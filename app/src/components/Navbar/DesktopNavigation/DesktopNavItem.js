import { useCallback, useRef } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import {
  Button,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
  Stack
} from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import DesktopSubNavItem from './DesktopSubNavItem'

function DesktopNavItem({ navItem }) {
  const location = useLocation()
  const match = navItem.href && matchPath(navItem.href, location.pathname)
  const linkBgColor = useColorModeValue(
    match ? 'gray.200' : null,
    match ? 'whiteAlpha.300' : null
  )
  const linkHoverBgColor = useColorModeValue(
    match ? 'gray.200' : 'gray.100',
    match ? 'whiteAlpha.300' : 'whiteAlpha.200'
  )
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const ref = useRef()

  const rightIcon = useCallback(({ isOpen }) => (
    navItem.children && (
      <Icon
        p={10}
        as={() => (
          <FaChevronDown
            style={{
              transition: 'all .5s ease',
              transform: !isOpen ? 'rotate(0deg)' : 'rotate(180deg)'
            }}
          />
        )}
      />
    )
  ), [navItem])

  return (
    <Popover placement='bottom-start' initialFocusRef={ref} gutter='15'>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button
              as={Link}
              to={navItem.href ?? '#'}
              leftIcon={navItem.icon && <Icon as={navItem.icon} h={4} w={4} />}
              lineHeight='1'
              rightIcon={rightIcon({ isOpen })}
              iconSpacing={2}
              colorScheme='gray'
              fontSize='sm'
              borderRadius='full'
              bg={linkBgColor}
              _hover={{ bg: linkHoverBgColor }}
              variant='ghost'
            >
              {navItem.label}
            </Button>
          </PopoverTrigger>
          {navItem.children && (
            <PopoverContent
              shadow='xl'
              bg={popoverContentBgColor}
              p={3}
              rounded='lg'
              minW='sm'
              border='none'
              borderTopRadius='none'
            >
              <Stack>
                {navItem.children.map((child) => (
                  <DesktopSubNavItem
                    {...child}
                    key={child.label}
                    onClose={onClose}
                  />
                ))}
              </Stack>
            </PopoverContent>
          )}
        </>
      )}
    </Popover>
  )
}

export default DesktopNavItem
