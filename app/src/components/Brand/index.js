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

function Brand({ to = '/', orientation = 'row' }) {
  const Content = (
    <Stack alignItems='center' direction={orientation}>
      <Center w='35px' h='35px' color='blue.500'>
        <BrandLogo />
      </Center>
      <Center fontSize={orientation === 'column' ? '2xl' : null}>
        <TextBrand />
      </Center>
    </Stack>
  )

  return (
    <Center
      cursor={to ? 'pointer' : 'default'}
      fontSize={useBreakpointValue({ base: '18px', md: '22px' })}
    >
      {to
        ? (
          <Link to={to ?? '#'} style={{ cursor: to ? 'pointer' : 'default' }}>
            {Content}
          </Link>
        ) //eslint-disable-line
        : Content}
    </Center>
  )
}

function TextBrand() {
  return (
    <Flex fontFamily='heading'>
      <HighlightedContent>E</HighlightedContent>
      <Text fontWeight='bold' color={useColorModeValue('gray.600', 'gray.300')}>
        lectro
      </Text>
      <HighlightedContent>CAR</HighlightedContent>
    </Flex>
  )
}

const HighlightedContent = ({ children }) => {
  return (
    <Text
      display='inline-flex'
      color={useColorModeValue('blue.500', 'blue.300')}
      fontWeight='bold'
    >
      {children}
    </Text>
  )
}

export default Brand
export { TextBrand }
