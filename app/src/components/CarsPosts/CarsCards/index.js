import { Link as RouterLink } from 'react-router-dom'
import { Badge, Flex, Image, Link, Spacer, Text, chakra } from '@chakra-ui/react'
import { getDiscount } from 'utils'

const hoverProps = {
  boxShadow: 'xl',
  transform: 'scale(1.05, 1.05) translateZ(0px) translate3d(0px, 0px, 0px)',
  transition: 'transform 300ms ease-out, box-shadow 300ms ease-out',
  _dark: { _after: { border: '3px solid #D53F8Ccc' } },
  _light: { _after: { border: '3px solid #D53F8Ccc' } }
}

const afterProps = {
  content: '""',
  inset: '0px',
  border: '4px solid transparent',
  position: 'absolute',
  transition: 'border 300ms ease-out 0s',
  borderRadius: '4px',
  zIndex: '1'
}

const image = (width, idImage) => {
  return `https://res.cloudinary.com/dvpbdhkn0/image/upload/c_thumb,w_${width},g_face/v1667192451/${idImage}.webp`
}
// Function to generate random number
function randomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function CarsCard({
  car,
  id,
  discountPercentage = 0,
  currencyType = 'US',
  files
}) {
  const numberFormat = new Intl.NumberFormat(
    currencyType === 'US'
      ? 'en-US'
      : 'es-CR'
  )
  console.log({ car })
  return (
    <Link
      as={RouterLink}
      to={`/post/${id}`}
      display='block'
      _hover={{ ...hoverProps }}
      _focus={{ ...hoverProps }}
      _focusWithin={{ ...hoverProps }}
      _after={{ ...afterProps }}
      position='relative'
      style={{ backfaceVisibility: 'hidden' }}
      borderRadius='4px'
      boxShadow='md'
      transform='scale(1, 1) translateZ(0px)'
      transition='transform 300ms ease-out, box-shadow 300ms ease-out'
    >
      <Flex
        display='block'
        _dark={{ bg: 'gray.700' }}
        _light={{ bg: 'gray.500' }}
        borderRadius='4px'
        paddingTop='56.25%'
        height='0'
        overflow='hidden'
        position='relative'
        width='full'
      >
        <chakra.div>
          <Image
            inset='0'
            display='block'
            height='100%'
            w='100%'
            objectFit='cover'
            opacity='1'
            position='absolute'
            transition='opacity 500ms ease-in-out 0s'
            objectPosition='center'
            src={image(800, files[0]?.public_id) || image(800, randomNumber(1, 18))}
            alt='add name here'
            onError={() => console.log('err')}
            loading='lazy'
          />
          <Flex
            background='linear-gradient(0deg, rgba(32,34,44,0.9528186274509804) 13%, rgba(32,34,44,0.9444152661064426) 15%, rgba(32,34,44,0.9164040616246498) 18%, rgba(32,34,44,0.8687850140056023) 21%, rgba(32,34,44,0.7539390756302521) 27%, rgba(32,34,44,0.6530987394957983) 32%, rgba(32,34,44,0.5970763305322129) 37%, rgba(32,34,44,0.0760679271708683) 70%)'
            position='absolute'
            left='0'
            top='0'
            right='0'
            bottom='0'
            zIndex='1'
            flexDirection='column'
            padding={3}
            userSelect='none'
            role='group'
          >
            <Flex flex='0 0 auto' w='full' justifyContent='flex-end' gap='2'>
              <Badge variant='subtle' bg='pink.100' color='pink.800'>
                {car.brand}
              </Badge>
            </Flex>
            <Spacer flex='1 1 auto' />
            <Flex
              color='white'
              flex='0 0 auto'
              fontWeight='semibold'
              _groupHover={{ textDecoration: 'underline' }}
              gap={1}
            >
              {car.model} -
              <Flex color='white' flex='0 0 auto' fontSize='xs' alignItems='center'>
                {car.year}
              </Flex>
            </Flex>
            <Flex
              color='white'
              flex='0 0 auto'
              flexDirection='column'
              justifyContent='flex-end'
              position='absolute'
              bottom='2'
              right='2'
              gap='1'
              fontSize='sm'
              alignItems='center'
            >
              {discountPercentage !== 0 && (
                <Text
                  color='red.200'
                  fontWeight='semibold'
                  fontSize='xs'
                  display='flex'
                  alignItems='center'
                  gap='1'
                >
                  <chakra.span textDecoration='line-through'>
                    ?? {car.price}
                  </chakra.span>
                  <Badge
                    fontSize='11px'
                    borderRadius='full'
                    color='red.200'
                    bg='red.800'
                    textDecoration='normal'
                  >
                    {discountPercentage}%
                  </Badge>
                </Text>
              )}
              <Badge
                borderRadius='full'
                color='pink.100'
                variant='outline'
                px='2'
                py='1'
              >
                {currencyType === 'US' ? '$' : '??'}
                {numberFormat.format(getDiscount(car.price, discountPercentage))}
              </Badge>
            </Flex>
          </Flex>
        </chakra.div>
      </Flex>
    </Link>
  )
}

export default CarsCard
