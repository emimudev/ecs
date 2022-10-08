import { chakra, Icon } from '@chakra-ui/react'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function SlickController({
  currentSlide,
  slideCount,
  sliderRef,
  isLeft = false,
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
      onClick={handleClick}
      background='transparent'
      cursor='pointer'
      display='block'
      position='absolute'
      color='white'
      tabIndex='0'
      height='100%'
      justifyContent='center'
      alignItems='center'
      top='0'
      right={isLeft ? 'auto' : '0'}
      transform={`translateX(${isLeft ? '-100%' : '100%'})`}
      transition='opacity 0.2s ease 0s'
      width='calc(3.5vw + 26px)'
      zIndex={1}
      opacity='0'
      _hover={{ opacity: '1' }}
      {...props}
    >
      <Icon as={isLeft ? AiOutlineLeft : AiOutlineRight} h='10' w='10' />
    </chakra.button>
  )
}

export default SlickController
