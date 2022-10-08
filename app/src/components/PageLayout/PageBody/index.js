import { Flex } from '@chakra-ui/react'

function PageBody({
  children,
  flexDirection = 'column',
  ...props
}) {
  return (
    <Flex
      flexDirection={flexDirection}
      gap={9}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default PageBody
