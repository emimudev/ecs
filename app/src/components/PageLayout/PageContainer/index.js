import React from 'react'
import { Flex } from '@chakra-ui/react'

function PageContainer({ children, ...props }) {
  return (
    <Flex
      {...props}
      flexDirection='column'
      flex='1 1 auto'
    >
      {children}
    </Flex>
  )
}

export default PageContainer
