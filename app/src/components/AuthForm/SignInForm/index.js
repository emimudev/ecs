import {
  Button,
  Checkbox,
  Flex, Link,
  Stack,
  Text
} from '@chakra-ui/react'
import { AuthFormHeader } from 'components/AuthForm'
import FormikFormControl from 'components/FormikFormControl'
import useSignInForm from './useSignInForm'

function SignInForm() {
  const { formik, openSignUpForm } = useSignInForm()

  return (
    <form onSubmit={formik.handleSubmit} autoComplete='off'>
      <AuthFormHeader title='Iniciar sesión' />
      <Stack spacing={3} fontSize='sm'>
        <FormikFormControl
          formik={formik}
          name='username'
          placeholder='Introduce tu correo electrónico'
          label='Correo electrónico'
          autoFocus
        />
        <FormikFormControl
          formik={formik}
          name='password'
          placeholder='Introduce tu contraseña'
          label='Contraseña'
          variant='password'
          inputProps={{ autoComplete: 'current-password' }}
        />
        <Flex justify='space-between' flexWrap='wrap'>
          <Checkbox
            name='rememberMe'
            checked={formik.values.rememberMe}
            onChange={formik.handleChange}
            fontSize='sm'
          >
            <span style={{ fontSize: '14px' }}>Recordarme</span>
          </Checkbox>
          <Link>¿Olvidaste tu contraseña?</Link>
        </Flex>
        <Stack spacing={2} pt='2'>
          <Button
            type='submit'
            colorScheme='pink'
            bg='pink.500'
            color='white'
            isLoading={formik.isSubmitting}
            loadingText='Iniciando sesión...'
            borderRadius='full'
          >
            Iniciar sesión
          </Button>
          <Stack direction='row' justify='flex-end' alignItems='center' spacing={2} flexWrap='wrap'>
            <Text>¿No tienes una cuenta?</Text>
            <Button
              lineHeight={1}
              variant='link'
              color='pink.400'
              onClickCapture={openSignUpForm}
            >
              Crear cuenta nueva
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </form>
  )
}

export default SignInForm
