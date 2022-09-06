import { Box, Divider, Flex, Stack } from '@chakra-ui/react'
import { TextBrand } from 'components/Brand'
import { AuthModalTypes } from 'redux/states/auth.state'
import BrandLogo from 'components/Illustrations/BrandLogo'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

function AuthForm({ variant = AuthModalTypes.SignIn }) {
  if (variant === AuthModalTypes.SignUp) {
    return <SignUpForm />
  }

  return <SignInForm />
}

export function AuthFormHeader() {
  return (
    <>
      <Stack align='center'>
        <Box w='60px' color='blue.500'>
          <BrandLogo />
        </Box>
        <Flex fontSize='2xl' fontWeight='semibold' align='center' wrap='wrap' gap='2'>
          Bienvenido a
          <TextBrand />
        </Flex>
      </Stack>
      <Divider my='2' />
    </>
  )
}

export default AuthForm
export { SignInForm, SignUpForm }
