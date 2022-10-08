import { useEffect, useId, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useToast } from '@chakra-ui/react'
import * as yup from 'yup'
import authAPI from 'services/authAPI'
import { closeAuthModalAction, loginAction, openSignInAction } from 'redux/slices/auth.slice'

const ErrorInfoEmpty = {
  status: null,
  isError: false,
  title: '',
  description: ''
}

function useSignUpForm() {
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
    authAPI.signUp(values)
      .then(signUpInfo => signUp(signUpInfo))
      .catch(({ status }) => handleFormError({ status }))
      .finally(() => setSubmitting(false))
  }

  const signUp = (signUpInfo) => {
    const { user, token } = signUpInfo
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

  return {
    formik,
    openLoginForm
  }
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

export default useSignUpForm
