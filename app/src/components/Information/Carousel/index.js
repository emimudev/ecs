import React, { useEffect, useState } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

export default function Carousel() {
  const slides = [
    {
      img: 'https://www.kbb.com/wp-content/uploads/2021/05/2022-kia-ev6-front-3qtr-16x9-1.jpg?w=763'
    },
    {
      img: 'https://forococheselectricos.com/wp-content/uploads/2013/07/bmw-i3-interior.jpg'
    },
    {
      img: 'https://acnews.blob.core.windows.net/imgnews/medium/NAZ_58e1ffc4dc5f49f293a182a3865d318d.jpg'
    },
    {
      img: 'https://acnews.blob.core.windows.net/imgnews/medium/NAZ_ca5ee7e9b69648979917911ba6a1791c.jpg'
    }
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  const slidesCount = slides.length

  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`
  }

  const SLIDES_INTERVAL_TIME = 3000
  const ANIMATION_DIRECTION = 'right'

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1))
    }

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1))
    }

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === 'left' ? prevSlide() : nextSlide()
    }, SLIDES_INTERVAL_TIME)
    return () => clearInterval(automatedSlide)
  }, [slidesCount])

  return (
    <Flex w='full' overflow='hidden'>
      <Flex pos='relative' h='400px' w='full' {...carouselStyle}>
        {slides.map((slide, sid) => (
          <Box key={`slide-${sid}`} flex='none' boxSize='full'>
            <Text
              color='white'
              fontSize='xs'
              p='8px 12px'
              pos='absolute'
              top='0'
              whiteSpace='nowrap'
            >
              {sid + 1} / {slidesCount}
            </Text>
            <Image
              src={slide.img}
              alt='carousel image'
              rounded='md'
              objectFit='cover'
              backgroundSize='cover'
            />
          </Box>
        ))}
      </Flex>
    </Flex>

  )
};
