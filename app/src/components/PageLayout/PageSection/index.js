import { Flex, Icon, Text } from '@chakra-ui/react'

const MainPadding = {
  base: '0 16px',
  lg: '0 calc(3.5vw + 24px)'
}

function PageSection({ padding = MainPadding, children, hasSlick = false, title, description, icon, ...props }) {
  return (
    <Flex
      flexDirection='column'
      gap={2}
      padding={MainPadding}
      {...props}
    >
      {(title || description || icon) && (
        <Flex flexDirection='column'>
          <Flex gap={2} alignItems='center'>
            {icon && (
              <Icon h='5' w='5' />
            )}
            {title && (
              <Text as='h4' fontSize='xl' fontWeight='bold' role='heading'>
                {title}
              </Text>
            )}
          </Flex>
          {description && (
            <Text
              fontSize='sm'
              _dark={{ color: 'whiteAlpha.800' }}
              _light={{ color: 'blackAlpha.700' }}
            >
              {description}
            </Text>
          )}
        </Flex>
      )}
      <Flex display='block' w='full' padding={{ base: hasSlick ? '0 15px' : '0', md: '0' }}>
        <div>
          {children}
        </div>
      </Flex>
    </Flex>
  )
}

export default PageSection
