import { Children, Fragment } from 'react'
import { Box, Center, Flex, Icon, chakra, Spacer, Collapse, useDisclosure } from '@chakra-ui/react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function Steps({ direction = 'vertical', children, ...props }) {
  if (direction !== 'vertical' && direction !== 'horizontal') {
    throw new Error('Direction must be (vertical or horizontal)')
  }
  return (
    <Box
      as='ol'
      display='flex'
      flexDirection={direction === 'vertical' ? 'column' : 'row'}
      w='full'
      fontFamily='heading'
      {...props}
    >
      {Children.map(children, (element, index) => (
        <Fragment key={index}>
          {element}
          {(Children.count(children) > index + 1) && <Spacer />}
        </Fragment>
      ))}
    </Box>
  )
}

function StepItem({ label, isCollapsable = true, icon, isCompleted, children, ...props }) {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true })
  return (
    <Box
      as='li'
      flexDirection='column'
      listStyleType='none'
      {...props}
    >
      <Flex
        alignItems='center'
        gap='2'
      >
        {icon && (
          <Center
            borderRadius='full'
            w='40px'
            h='40px'
            borderWidth='2px'
            _dark={{ bg: 'gray.700' }}
          >
            <Icon as={icon} h='5' w='5' />
          </Center>
        )}
        <chakra.span
          _light={{ color: 'gray.800' }}
          _dark={{ color: 'gray.100' }}
          fontSize='lg'
          fontWeight='medium'
          display='flex'
          alignItems='center'
          gap='3'
          cursor={isCollapsable ? 'pointer' : 'default'}
          onClickCapture={isCollapsable && onToggle}
          userSelect='none'
        >
          {label}
          {isCollapsable && <Icon as={isOpen ? FaChevronDown : FaChevronUp} />}
        </chakra.span>
      </Flex>
      <Box
        minH='2rem'
        my='2'
        mt={{ base: '4', sm: '2' }}
        marginStart={{ base: '0', sm: 'calc(40px / 2)' }}
        paddingStart={{ base: '0', sm: '4' }}
        borderLeft={{ base: 'none', sm: '2px solid' }}
        _dark={{ borderColor: 'gray.700' }}
        _light={{ borderColor: 'gray.300' }}
        transition='border-color 200ms'
        transitionDuration='200ms'
      >
        <Collapse in={isOpen} animateOpacity style={{ padding: '10px 5px', overflow: null }}>
          {children}
        </Collapse>
      </Box>
    </Box>
  )
}

function StepItemSurface({ children, ...props }) {
  return (
    <Box
      borderRadius='lg'
      border='1px solid'
      _dark={{
        bg: 'gray.800',
        borderColor: 'gray.700'
      }}
      _light={{
        bg: 'white',
        borderColor: 'gray.200'
      }}
      shadow='md'
      px={{
        base: '4',
        md: '10'
      }}
      py='6'
      {...props}
    >
      {children}
    </Box>
  )
}

export default Steps
export { StepItem, StepItemSurface }
