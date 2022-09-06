import {
  Text,
  Center,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Flex
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import BrandLogo from 'components/Illustrations/BrandLogo'

function Brand({ to = '/' }) {
  return (
    <Center cursor={to && 'pointer'} fontSize={useBreakpointValue({ base: '18px', md: '22px' })}>
      <Link to={to ?? ''}>
        <Stack alignItems='center' direction='row'>
          <Center w='35px' h='35px' color='blue.500'>
            <BrandLogo />
          </Center>
          <Center>
            <TextBrand />
          </Center>
        </Stack>
      </Link>
    </Center>
  )
}

export function TextBrand() {
  return (
    <Flex fontFamily='heading'>
      <HighlightedContent>E</HighlightedContent>
      <Text fontWeight='bold' color={useColorModeValue('gray.600', 'gray.300')}>lectro</Text>
      <HighlightedContent>CAR</HighlightedContent>
    </Flex>
  )
}

const HighlightedContent = ({ children }) => {
  return (
    <Text
      display='inline-flex'
      color={useColorModeValue('blue.500', 'blue.500')}
      fontWeight='bold'
    >
      {children}
    </Text>
  )
}

export default Brand
