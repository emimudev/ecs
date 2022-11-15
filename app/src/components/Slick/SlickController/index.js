import { chakra, Icon, useBreakpointValue } from '@chakra-ui/react'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function SlickController({
  currentSlide,
  slideCount,
  sliderRef,
  isLeft = false,
  solidArrows = false,
  hideArrows = true,
  ...props
}) {
  const handleClick = () => {
    if (isLeft) {
      sliderRef?.current?.slickPrev?.()
    } else {
      sliderRef?.current?.slickNext?.()
    }
  }

  return (
    <chakra.button
      type='button'
      onClick={handleClick}
      background='transparent'
      cursor='pointer'
      style={{ display: solidArrows ? 'flex' : 'block' }}
      position='absolute'
      color='white'
      tabIndex='0'
      height={!solidArrows ? '100%' : '40px'}
      justifyContent='center'
      alignItems='center'
      top={solidArrows ? 'calc(50% - 20px)' : '0'}
      borderRadius={solidArrows && 'full'}
      alignSelf='center'
      right={isLeft ? 'auto' : '0'}
      transform={!solidArrows && `translateX(${isLeft ? '-100%' : '100%'})`}
      transition='opacity 0.2s ease 0s'
      width={!solidArrows ? 'calc(3.5vw + 26px)' : '40px'}
      zIndex={1}
      opacity={hideArrows ? '0' : '.9'}
      _hover={{
        opacity: useBreakpointValue({
          base: solidArrows ? '1' : '0',
          md: '1'
        })
      }}
      _dark={{
        bg: solidArrows && 'pink.300'
      }}
      _light={{
        bg: solidArrows && 'pink.500',
        color: 'white'
      }}
      {...props}
    >
      <Icon
        as={isLeft ? AiOutlineLeft : AiOutlineRight}
        h={solidArrows ? '5' : '10'}
        w={solidArrows ? '5' : '10'}
      />
    </chakra.button>
  )
}

export default SlickController
