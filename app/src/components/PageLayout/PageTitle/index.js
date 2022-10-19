import { Heading } from '@chakra-ui/react'
import { memo } from 'react'

function PageTitle({ children, ...props }) {
  return (
    <Heading
      as='h1'
      {...props}
    >
      {children}
    </Heading>
  )
}

export default memo(PageTitle)
