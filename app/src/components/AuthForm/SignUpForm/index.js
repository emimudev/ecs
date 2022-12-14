import { Button, Stack, Text } from '@chakra-ui/react'
import { AuthFormHeader } from '..'
import FormikFormControl from 'components/AuthForm/FormikFormControl'
import useSignUpForm from './useSignUpForm'

function SignUpForm() {
  const { formik, openLoginForm } = useSignUpForm()
  return (
    <form onSubmit={formik.handleSubmit} autoComplete='off'>
      <AuthFormHeader title='Crear cuenta nueva' />
      <Stack spacing={3}>
        <FormikFormControl
          formik={formik}
          name='name'
          placeholder='Introduce tu nombre'
          label='Nombre'
          autoFocus
          inputProps={inputProps}
        />
        <FormikFormControl
          formik={formik}
          name='lastname'
          placeholder='Introduce tus apellidos'
          label='Apellidos'
          inputProps={inputProps}
        />
        <FormikFormControl
          formik={formik}
          name='email'
          placeholder='Introduce tu correo electrónico'
          label='Correo Electrónico'
          inputProps={{ type: 'email', ...inputProps }}
        />
        <FormikFormControl
          formik={formik}
          name='password'
          placeholder='Introduce tu contraseña'
          label='Contraseña'
          variant='password'
          inputProps={inputProps}
        />
        <FormikFormControl
          formik={formik}
          name='confirmPassword'
          placeholder='Vuelve a introducir la contraseña'
          label='Confirmar contraseña'
          variant='password'
          inputProps={inputProps}
        />
        <Stack spacing={1} pt='2'>
          <Button
            type='submit'
            colorScheme='pink'
            bg='pink.500'
            color='white'
            isLoading={formik.isSubmitting}
            borderRadius='full'
          >
            Crear cuenta
          </Button>
          <Stack direction='row' justify='flex-end' alignItems='center' spacing={2}>
            <Text>¿Eres miembro?</Text>
            <Button
              lineHeight={1}
              variant='link'
              color='pink.400'
              onClickCapture={openLoginForm}
            >
              Iniciar sesión
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </form>
  )
}

const inputProps = {
  variant: 'filled'
}

export default SignUpForm
