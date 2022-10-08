import { chakra } from '@chakra-ui/react'

function SlickItem({ children }) {
  return (
    <chakra.div className='slick-item'>
      {children}
    </chakra.div>
  )
}

export default SlickItem
