import { Box, Button, Center, Divider, Flex, Icon, VStack } from '@chakra-ui/react'
import { Fragment } from 'react'
import { FaCheck } from 'react-icons/fa'
import Surface from 'components/Surface'

function PricingCard({
  isSelected = false,
  onSelect,
  title,
  amount,
  description,
  icon,
  details = [],
  id,
  isPopular = false
}) {
  const handleClick = () => onSelect?.(id)

  return (
    <Surface
      borderRadius='xl'
      px={{ base: '4', xl: '8' }}
      py={{ base: '6', xl: '8' }}
      position='relative'
      overflow='hidden'
      fontSize='md'
      _dark={{
        bg: isSelected ? '#d53f8c14' : 'gray.800',
        borderColor: isSelected ? 'pink.500' : 'gray.700'
      }}
      _light={{
        bg: isSelected ? 'pink.50' : 'white',
        borderColor: isSelected ? 'pink.500' : 'gray.50'
      }}
      w='full'
    >
      {isPopular && (
        <Box
          position='absolute'
          bg='#b8328085'
          fontSize='md'
          transform='rotate(45deg)'
          textAlign='center'
          top='5'
          right='calc(var(--chakra-space-10) * -1);'
          py='2'
          px='12'
          color='white'
        >
          Popular
        </Box>
      )}
      <VStack h='full'>
        <Flex
          justify='center'
          _light={{ color: 'pink.500' }}
          _dark={{ color: 'pink.300' }}
          fontWeight='semibold'
          fontSize='x-large'
        >
          {title}
        </Flex>
        <Flex
          justify='center'
          fontSize='xx-large'
          fontWeight='bold'
        >
          {amount}
        </Flex>
        <Flex justify='center' _dark={{ color: 'whiteAlpha.700' }}>
          {description}
        </Flex>
        <VStack textAlign='left' w='full' maxW='300px' pt='4'>
          {details.map((detail, index) => (
            <Fragment key={index}>
              <Divider />
              <Flex gap='3' w='full' alignItems='center'>
                <Center
                  w='5'
                  h='5'
                  borderRadius='full'
                  _dark={{ color: 'pink.700', bg: 'pink.400' }}
                  _light={{ color: 'pink.400', bg: 'pink.100' }}
                >
                  <Icon as={FaCheck} h='3' w='3' />
                </Center>
                {detail}
              </Flex>
            </Fragment>
          ))}
        </VStack>
        <Flex flex='1 1 auto' w='full' pt='5'>
          <Button
            colorScheme='pink'
            alignSelf='flex-end'
            _dark={{
              bg: 'pink.500',
              color: 'white',
              _hover: {
                bg: 'pink.600'
              }
            }}
            w='full'
            leftIcon={isSelected && <Icon as={FaCheck} />}
            onClickCapture={handleClick}
          >
            {isSelected ? 'Seleccionado' : 'Seleccionar plan'}
          </Button>
        </Flex>
      </VStack>
    </Surface>
  )
}

export default PricingCard
