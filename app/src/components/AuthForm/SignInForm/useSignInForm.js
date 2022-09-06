import { useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { useEffect, useId, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import {
  closeAuthModalAction,
  loginAction,
  openSignUpAction
} from 'redux/states/auth.state'
import authAPI from 'services/authAPI'

const validationSchema = yup.object({
  username: yup
    .string()
    .required('Este campo es requerido'),
  password: yup
    .string()
    .required('Este campo es requerido')
})

function useSignInForm() {
  const [errorInfo, setErrorInfo] = useState({
    status: null,
    isError: false,
    title: '',
    description: ''
  })
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      rememberMe: false
    },
    validationSchema,
    onSubmit: handleSubmit
  })
  const dispatcher = useDispatch()
  const toast = useToast()
  const toastId = useId()

  function handleSubmit(values, { setSubmitting }) {
    setErrorInfo?.({
      status: null,
      isError: false,
      title: '',
      description: ''
    })
    authAPI.login({
      username: values.username,
      password: values.password
    })
      .then(loginInfo => signIn(loginInfo))
      .catch(({ response: { status } }) => handleFormError({ status }))
      .finally(() => setSubmitting(false))
  }

  const handleFormError = ({ status }) => {
    formik.setErrors({ username: '', password: '' })
    if (status === 401) {
      return setErrorInfo({
        status,
        isError: true,
        title: 'Error al iniciar sesión',
        description: 'Usuario o contraseña incorrectos'
      })
    }
    setErrorInfo({
      status,
      isError: true,
      title: 'Error al iniciar sesión',
      description: 'Ha ocurrido un error inesperado'
    })
  }

  const signIn = (loginInfo) => {
    const { user, token } = loginInfo
    dispatcher(loginAction({
      user,
      sessionToken: token,
      rememberMe: formik.values.rememberMe
    }))
    dispatcher(closeAuthModalAction())
  }

  const openSignUpForm = () => {
    dispatcher(openSignUpAction())
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
    openSignUpForm
  }
}

export default useSignInForm
