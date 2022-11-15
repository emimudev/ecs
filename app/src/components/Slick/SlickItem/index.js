import { chakra } from '@chakra-ui/react'

function SlickItem({ children, ...props }) {
  return (
    <chakra.div className='slick-item' {...props}>
      {children}
    </chakra.div>
  )
}

export default SlickItem
