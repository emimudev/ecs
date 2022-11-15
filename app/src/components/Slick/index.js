import { chakra } from '@chakra-ui/react'
import { forwardRef, useImperativeHandle, memo, useRef } from 'react'
import Slider from 'react-slick'
import SlickController from './SlickController'

const slickSettings = {
  speed: 650,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 1144,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

/**
 * @param {import('react-slick').Settings|{children:React.ReactNode, showOverflow:Boolean, containerProps: import('@chakra-ui/react').ChakraComponent<"div">}} params
 */
const Slick = forwardRef(({
  children,
  containerProps,
  solidArrows = false,
  showOverflow = true,
  hideArrows = true,
  className,
  ...props
}, ref) => {
  const sliderRef = useRef({})

  const NextArrow = (
    <SlickController
      sliderRef={sliderRef}
      solidArrows={solidArrows}
      hideArrows={hideArrows}
      aria-label='Selecciona esta opción para ver más publicaciones destacadas'
    />
  )

  const PrevArrow = (
    <SlickController
      sliderRef={sliderRef}
      solidArrows={solidArrows}
      hideArrows={hideArrows}
      aria-label='Selecciona esta opción para ver más publicaciones destacadas'
      isLeft
    />
  )

  useImperativeHandle(ref, () => ({
    onLoad: () => sliderRef.current.slickGoTo(0)
  }))

  const _settings = {
    ...slickSettings,
    ...props
  }

  return (
    <chakra.div {...containerProps}>
      <Slider
        ref={sliderRef}
        className={showOverflow && `slider-allow-overflow ${className}`}
        nextArrow={NextArrow}
        prevArrow={PrevArrow}
        {..._settings}
      >
        {children}
      </Slider>
    </chakra.div>
  )
})

export default memo(Slick)
export { default as SlickController } from './SlickController'
export { default as SlickItem } from './SlickItem'
