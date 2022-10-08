import { Flex, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const CategoryContainer = ({ children, index, to }) => (
  <Flex
    userSelect='none'
    as={Link}
    to={to}
    boxShadow='md'
    maxW='700px'
    width='full'
    direction={{ base: 'column', md: 'row' }}
    rounded='xl'
    px={8}
    py={5}
    gap={{ base: '3', md: '5' }}
    justifyContent='space-between'
    position='relative'
    bg={useColorModeValue('white', 'gray.800')}
    fontSize='sm'
    role='group'
    display='flex'
    _before={{
      content: '""',
      position: 'absolute',
      zIndex: '-1',
      height: 'full',
      maxW: '640px',
      width: 'full',
      filter: 'blur(40px)',
      transform: 'scale(0.85)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      top: 0,
      left: 0,
      backgroundImage: shadows[index % 4]
    }}
    transition='background 0.2s ease-out'
    _light={{
      _hover: {
        bg: 'gray.100'
      }
    }}
    _dark={{
      _hover: {
        bg: 'gray.700'
      }
    }}
  >
    {children}
  </Flex>
)

const shadows = [
  'url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")',

  'url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'457.367\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' transform=\'rotate(-180 457.367 123.926)\' fill=\'%23ED8936\'/%3E%3Cellipse cx=\'160.427\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' transform=\'rotate(-180 160.427 61.0737)\' fill=\'%2348BB78\'/%3E%3Cellipse cx=\'193.808\' cy=\'111.771\' rx=\'193.808\' ry=\'73.2292\' transform=\'rotate(-180 193.808 111.771)\' fill=\'%230BC5EA\'/%3E%3Cellipse cx=\'337.295\' cy=\'74.415\' rx=\'193.808\' ry=\'73.2292\' transform=\'rotate(-180 337.295 74.415)\' fill=\'%23ED64A6\'/%3E%3C/svg%3E")',

  'url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED8936\'/%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%2348BB78\'/%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%230BC5EA\'/%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED64A6\'/%3E%3C/svg%3E")',

  'url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'457.367\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' transform=\'rotate(-180 457.367 123.926)\' fill=\'%23ECC94B\'/%3E%3Cellipse cx=\'160.427\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' transform=\'rotate(-180 160.427 61.0737)\' fill=\'%239F7AEA\'/%3E%3Cellipse cx=\'193.808\' cy=\'111.771\' rx=\'193.808\' ry=\'73.2292\' transform=\'rotate(-180 193.808 111.771)\' fill=\'%234299E1\'/%3E%3Cellipse cx=\'337.295\' cy=\'74.415\' rx=\'193.808\' ry=\'73.2292\' transform=\'rotate(-180 337.295 74.415)\' fill=\'%2348BB78\'/%3E%3C/svg%3E")'
]

export { CategoryContainer }
