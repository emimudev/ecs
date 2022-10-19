import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useColorModeValue
} from '@chakra-ui/react'
import PasswordInput from 'components/PasswordInput'

function FormikFormControl({
  formik,
  name,
  placeholder,
  autoFocus = false,
  label,
  inputProps = { variant: 'outline' },
  variant = 'text',
  ...props
}) {
  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const bgHoverColor = useColorModeValue('gray.200', 'gray.700')
  const placeholderColor = useColorModeValue('gray.600', 'gray.400')
  if (!formik) {
    throw new Error('An instance of Formik is required.')
  }
  const isTouched = formik.touched[name]
  const hasError = formik.errors[name] !== undefined
  const error = formik.errors[name]
  const showLabelError = isTouched && hasError && !error
  const labelColorLight = showLabelError ? 'red.500' : null
  const labelColorDark = showLabelError ? 'red.200' : null

  return (
    <FormControl isInvalid={isTouched && error} fontSize='sm' {...props}>
      <FormLabel
        _dark={{ color: labelColorDark }}
        _light={{ color: labelColorLight }}
        fontSize='sm'
      >
        {label}
      </FormLabel>
      {variant === 'text' && (
        <Input
          name={name}
          placeholder={placeholder}
          value={formik.values[name]}
          onChange={formik.handleChange}
          autoFocus={autoFocus}
          bg={inputProps?.variant === 'filled' ? bgColor : 'transparent'}
          _hover={{ bg: bgHoverColor }}
          _placeholder={{ color: placeholderColor }}
          {...inputProps}
        />
      )}
      {variant === 'password' && (
        <PasswordInput
          name={name}
          placeholder={placeholder}
          value={formik.values[name]}
          onChange={formik.handleChange}
          autoFocus={autoFocus}
          bg={inputProps?.variant === 'filled' ? bgColor : 'transparent'}
          _hover={{ bg: bgHoverColor }}
          _placeholder={{ color: placeholderColor }}
          {...inputProps}
        />
      )}
      <FormErrorMessage>
        {isTouched && error}
      </FormErrorMessage>
    </FormControl>
  )
}

export default FormikFormControl
