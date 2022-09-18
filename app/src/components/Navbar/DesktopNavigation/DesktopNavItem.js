import { useCallback, useRef } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import {
  Link as FancyLink,
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
    match ? 'blue.100' : null,
    match ? 'blue.800' : null
  )
  const linkHoverBgColor = useColorModeValue(
    match ? 'blue.100' : 'gray.100',
    match ? 'blue.800' : 'whiteAlpha.200'
  )
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const ref = useRef()

  const navButtonProps = {
    leftIcon: navItem.icon && <Icon as={navItem.icon} h={5} w={5} />,
    variant: 'ghost',
    size: 'sm',
    bg: linkBgColor,
    fontWeight: match && 'bold',
    cursor: navItem.children ? 'default' : 'pointer',
    borderRadius: 'full',
    _hover: { bg: linkHoverBgColor },
    _active: { bg: linkHoverBgColor },
    _groupHover: { bg: linkHoverBgColor }
  }

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
    <Popover placement='bottom-start' initialFocusRef={ref}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <FancyLink
              as={Link}
              to={navItem.href ?? '#'}
              _hover={{ textDecor: 'none' }}
            >
              <Button
                {...navButtonProps}
                rightIcon={rightIcon({ isOpen })}
                iconSpacing={2}
              >
                {navItem.label}
              </Button>
            </FancyLink>
          </PopoverTrigger>
          {navItem.children && (
            <PopoverContent
              shadow='lg'
              bg={popoverContentBgColor}
              p={3}
              rounded='lg'
              minW='sm'
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
