import { Flex, Heading, Spacer } from '@chakra-ui/react'
import { memo } from 'react'

function PageTitle({ children, extraContent, ...props }) {
  return (
    <Flex flexWrap='wrap'>
      <Heading
        as='h1'
        {...props}
      >
        {children}
      </Heading>
      <Spacer />
      {extraContent}
    </Flex>
  )
}

export default memo(PageTitle)
