import { useEffect, useId, useState } from 'react'
import { Button, Stack, Text, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { closeAuthModalAction, loginAction, openSignInAction } from 'redux/states/auth.state'
import FormikFormControl from 'components/FormikFormControl'
import { AuthFormHeader } from '..'
import authAPI from 'services/authAPI'

const ErrorInfoEmpty = {
  status: null,
  isError: false,
  title: '',
  description: ''
}

function SignUpForm() {
  const dispatcher = useDispatch()
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: handleSubmit
  })
  const [errorInfo, setErrorInfo] = useState(ErrorInfoEmpty)
  const toast = useToast()
  const toastId = useId()

  const openLoginForm = () => {
    dispatcher(openSignInAction())
  }

  function handleSubmit(values, { setSubmitting }) {
    setErrorInfo(ErrorInfoEmpty)
    console.log({ values })
    authAPI.signUp(values)
      .then(signUpInfo => signUp(signUpInfo))
      .catch(({ status }) => handleFormError({ status }))
      .finally(() => setSubmitting(false))
  }

  const signUp = (signUpInfo) => {
    const { user, token } = signUpInfo
    console.log({ signUpInfo })
    dispatcher(loginAction({
      user,
      sessionToken: token,
      rememberMe: true
    }))
    dispatcher(closeAuthModalAction())
  }

  const handleFormError = ({ status }) => {
    formik.setErrors({ email: '' })
    setErrorInfo({
      status,
      isError: true,
      title: 'Error al inscribirse',
      description: 'El correo ya ha sido registrado'
    })
  }

  useEffect(() => {
    if (!toast.isActive(toastId) && errorInfo.isError) {
      toast({
        id: toastId,
        status: 'error',
        title: errorInfo.title,
        description: errorInfo.description,
        variant: 'left-accent',
        position: 'bottom-right',
        isClosable: true
      })
    }
  }, [errorInfo, toast, toastId])

  return (
    <form onSubmit={formik.handleSubmit} autoComplete='off'>
      <AuthFormHeader />
      <Stack spacing={3}>
        <FormikFormControl
          formik={formik}
          name='name'
          placeholder='Introduce tu nombre'
          label='Nombre'
          autoFocus
        />
        <FormikFormControl
          formik={formik}
          name='lastname'
          placeholder='Introduce tus apellidos'
          label='Apellidos'
        />
        <FormikFormControl
          formik={formik}
          name='email'
          placeholder='Introduce tu correo electrónico'
          label='Correo Electrónico'
          inputProps={{ type: 'email' }}
        />
        <FormikFormControl
          formik={formik}
          name='password'
          placeholder='Introduce tu contraseña'
          label='Contraseña'
          variant='password'
        />
        <FormikFormControl
          formik={formik}
          name='confirmPassword'
          placeholder='Vuelve a introducir la contraseña'
          label='Confirmar contraseña'
          variant='password'
        />
        <Stack spacing={1} pt='2'>
          <Button
            type='submit'
            colorScheme='blue'
            bg='blue.500'
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
              color='blue.400'
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

const validationSchema = yup.object({
  name: yup
    .string('Introduce tu nombre')
    .required('Este campo es requerido'),
  lastname: yup
    .string('Introduce tus apellidos')
    .required('Este campo es requerido'),
  email: yup
    .string('Introduce tu correo electrónico')
    .email('Debe ingresar un correo válido')
    .required('Este campo es requerido'),
  password: yup
    .string('Introduce tu contraseña')
    .min(6, 'La contraseña debe tener almenos 6 caracteres')
    .max(16, 'No se admiten más de 16 caracteres')
    .required('Este campo es requerido'),
  confirmPassword: yup
    .string('Confirmar contraseña')
    .max(16, 'No se admiten más de 16 caracteres')
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Este campo es requerido')
})

export default SignUpForm
