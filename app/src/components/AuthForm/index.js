import { Box, Divider, Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import { TextBrand } from 'components/Brand'
import { AuthModalTypes } from 'redux/states/authModal.state'
import BrandLogo from 'components/Illustrations/BrandLogo'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

function AuthForm({ variant = AuthModalTypes.SignIn }) {
  if (variant === AuthModalTypes.SignUp) {
    return <SignUpForm />
  }

  return <SignInForm />
}

export function AuthFormHeader({ title }) {
  return (
    <>
      <Stack align='center' pt={{ base: 10, sm: 0 }}>
        <Box w='60px' color={useColorModeValue('pink.500', 'pink.300')}>
          <BrandLogo />
        </Box>
        <Flex fontSize='2xl' fontWeight='semibold' align='center' wrap='wrap' gap='2'>
          Bienvenido a
          <TextBrand />
        </Flex>
        {title && (
          <Flex w='full' fontSize='18px' fontWeight='semibold' pt='2'>
            {title}
          </Flex>
        )}
      </Stack>
      <Divider my='2' />
    </>
  )
}

export default AuthForm
export { SignInForm, SignUpForm }
