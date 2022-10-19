import { Box, Center, Flex, Icon, chakra, Spacer } from '@chakra-ui/react'
import React from 'react'

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
      {React.Children.map(children, (element, index) => (
        <React.Fragment key={index}>
          {element}
          {(React.Children.count(children) > index + 1) && <Spacer />}
        </React.Fragment>
      ))}
    </Box>
  )
}

function StepItem({ label, icon, isCompleted, children, ...props }) {
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
          fontSize='md'
          fontWeight='medium'
        >
          {label}
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
        {children}
      </Box>
    </Box>
  )
}

function StepItemSurface({ children, ...props }) {
  return (
    <Box
      py={{
        base: '0',
        sm: '3'
      }}
    >
      <Box
        borderRadius='lg'
        _dark={{
          bg: 'gray.800',
          borderColor: 'gray.700'
        }}
        _light={{
          bg: 'white',
          borderColor: 'gray.100'
        }}
        shadow='md'
        px={{
          base: '4',
          md: '10'
        }}
        py='5'
        {...props}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Steps
export { StepItem, StepItemSurface }
