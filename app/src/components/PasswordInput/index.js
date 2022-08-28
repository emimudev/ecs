import { Button, Icon, Input, InputGroup, InputRightElement, Tooltip, useBoolean } from '@chakra-ui/react'
import { GoEye, GoEyeClosed } from 'react-icons/go'

function PasswordInput({ value, handleChange, ...inputProps }) {
  const [isVisible, { toggle }] = useBoolean()

  return (
    <InputGroup size='lg'>
      <Input
        type={isVisible ? 'text' : 'password'}
        variant='filled'
        placeholder='Escriba su contraseña'
        value={value}
        onChange={handleChange}
        {...inputProps}
      />
      <InputRightElement>
        <Tooltip label={isVisible ? 'Ocultar' : 'Mostrar'} fontSize='md'>
          <Button variant='link' onClick={toggle}>
            <Icon as={isVisible ? GoEyeClosed : GoEye} />
          </Button>
        </Tooltip>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput
