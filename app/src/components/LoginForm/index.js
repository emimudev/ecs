import { useState } from 'react'
import { Button, Input, Stack, Text } from '@chakra-ui/react'
import PasswordInput from 'components/PasswordInput'

function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const handleEmailChange = (event) => {
    setFormValues(prev => ({ ...prev, email: event.target.value }))
  }
  const handlePasswordChange = (event) => {
    console.log({ event })
    setFormValues(prev => ({ ...prev, password: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ event })
  }

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <Stack spacing={6} mb='4'>
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Text>Correo electrónico</Text>
            <Input
              onChange={handleEmailChange}
              type='email'
              name='email'
              autoFocus size='lg'
              placeholder='Escriba su direción de correo'
              variant='filled'
              value={formValues.email}
              required
            />
          </Stack>
          <Stack spacing={2}>
            <Text>Contraseña</Text>
            <PasswordInput
              name='password'
              value={formValues.password}
              handleChange={handlePasswordChange}
              required
            />
          </Stack>
        </Stack>
        <Stack>
          <Button
            type='submit'
            colorScheme='purple'
            bg='purple.500'
            color='white'
          >
            Ingresar
          </Button>
          <Stack direction='row' justify='flex-end' gap='3px' alignItems='center'>
            <Text>¿No tienes una cuenta?</Text>
            <Button lineHeight={1} variant='link' color='purple.400'>Crear cuenta nueva</Button>
          </Stack>
        </Stack>
      </Stack>
    </form>
  )
}

export default LoginForm
