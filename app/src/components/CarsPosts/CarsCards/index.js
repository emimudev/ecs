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

const images = [
  'https://cnnespanol.cnn.com/wp-content/uploads/2021/04/210419105832-01-toyota-bz4x-electric-suv-full-169.jpg?quality=100&strip=info',
  'https://www.hibridosyelectricos.com/media/hibridos/images/2020/04/22/2020042209125445234.jpg',
  'https://carnovo.com/wp-content/uploads/2018/04/toyota-chr-2018.jpg',
  'https://www.diariomotor.com/imagenes/picscache/750x/toyota_c_hr_electrico_china_02_750x.jpg',
  'https://www.autopista.es/uploads/s1/48/54/28/7/5c862cf10ee694035e349b8c-toyota-ch-r-ev-el-suv-electrico-que-podria-llegar-en-2021.jpeg',
  'https://forococheselectricos.com/wp-content/uploads/2020/08/toyota-prius-2019-1218-01_1920x1600c.jpg',
  'https://siempreauto.com/wp-content/uploads/sites/9/2021/11/Toyota-bz4x.jpg?quality=60&strip=all&w=1200',
  'https://images.ecestaticos.com/58eV7fbUhFKOEnnZ60Bt_klDkz4=/0x0:2272x1512/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F6bf%2Fc94%2Fe3a%2F6bfc94e3adbc71f9c747e3597f021bf7.jpg',
  'https://static.motor.es/fotos-noticias/2020/04/toyota-c-hr-ev-lanzamiento-china-202066551-1586866237_1.jpg',
  'https://www.actualidadmotor.com/wp-content/uploads/2019/04/toyota-c-hr-ev-3.jpg',
  'https://www.autoinfluence.com/wp-content/uploads/2022/03/2022-Toyota-C-HR-White-LED.jpg',
  'https://autobild.bg/wp-content/uploads/2019/04/c-hrneonlimefront-937161.jpg',
  'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/10/toyota-c-hr-2020.jpg',
  'https://www.gannett-cdn.com/presto/2020/06/16/PNJM/a2985465-365d-4467-bc16-4a2d04de6b60-ToyotaCHR.jpg',
  'https://images4.alphacoders.com/683/thumb-1920-683570.jpg',
  'https://wallpaperaccess.com/full/4569519.jpg',
  'https://www.hdcarwallpapers.com/download/toyota_c_hr_ev_2020_5k-3840x2160.jpg',
  'https://back.3blmedia.com/sites/default/files/styles/ratio_3_2/public/triplepundit/wide/toyotas%20EVs.png?h=7aeb42f8',
  'https://cdn.motor1.com/images/mgl/XBoBZb/s3/toyota-bz4x.jpg',
  'https://paultan.org/image/2022/04/2022-Toyota-bZ4X-Europe-1-e1649145316615-1200x801.jpg',
  'https://www.topgear.com/sites/default/files/2021/10/TOY_bZ4X_2021_PRELAUNCH_HUB_BRAND_IMG_Lifestyle_01-scaled.jpg'
]

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
  discountPercentage = 0,
  currencyType = 'US',
  files,
  srcImg
}) {
  const numberFormat = new Intl.NumberFormat(
    currencyType === 'US'
      ? 'en-US'
      : 'es-CR'
  )
  return (
    <Link
      as={RouterLink}
      to='#'
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
            src={image(400, files[0].public_id) || images[randomNumber(0, images.length - 1)]}
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
              {discountPercentage && (
                <Text
                  color='red.200'
                  fontWeight='semibold'
                  fontSize='xs'
                  display='flex'
                  alignItems='center'
                  gap='1'
                >
                  <chakra.span textDecoration='line-through'>
                    ¢ {car.price}
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
                {currencyType === 'US' ? '$' : '¢'}
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
