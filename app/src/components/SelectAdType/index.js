import { Flex, useRadio, Text, Checkbox, chakra, Center, Icon } from '@chakra-ui/react'

function SelectAdType({ value, title, description, icon, radioProps, setValue }) {
  const {
    state,
    getInputProps,
    getCheckboxProps,
    htmlProps,
    getLabelProps
  } = useRadio(radioProps)
  const { isChecked } = state

  return (
    <chakra.label {...htmlProps} cursor='pointer'>
      <Flex
        direction='row'
        border='2px solid'
        _light={{
          borderColor: isChecked ? 'pink.200' : 'gray.300',
          bg: isChecked && 'pink.50'
        }}
        _dark={{
          borderColor: isChecked ? 'pink.200' : 'gray.500',
          bg: isChecked && 'rgba(251, 182, 206, 0.12)',
          color: isChecked && 'pink.200'
        }}
        py='2'
        px='4'
        borderRadius='2xl'
        gap={4}
        {...getCheckboxProps()}
        userSelect='none'
      >
        {icon && (
          <Flex justify='center' align='center' flex='0 0 auto'>
            <Center
              _light={{
                color: isChecked ? 'pink.400' : 'blackAlpha.600',
                bg: isChecked ? 'pink.100' : 'gray.200'
              }}
              _dark={{
                color: isChecked ? 'pink.50' : 'whiteAlpha.500',
                bg: isChecked ? 'pink.400' : 'gray.800'
              }}
              borderRadius='full'
              p='2'
            >
              <Icon as={icon} h={7} w={7} />
            </Center>
          </Flex>
        )}
        <Flex direction='column' flex='1 1 auto'>
          <Text fontSize='md' fontWeight='semibold' noOfLines={1}>
            {title}
          </Text>
          <Text fontSize='sm' noOfLines={2}>
            {description}
          </Text>
        </Flex>
        <Flex flex='0 0 auto'>
          <input {...getInputProps({})} hidden />
          <Checkbox
            size='lg'
            colorScheme='pink'
            isChecked={isChecked}
            onClickCapture={() => setValue(value)}
            {...getLabelProps()}
          />
        </Flex>
      </Flex>
    </chakra.label>
  )
}

export default SelectAdType
