import { useState } from 'react'
import { Flex, Skeleton, Stack, chakra, Divider, Grid, GridItem, Tag } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { formatDistance } from 'date-fns'
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { es } from 'date-fns/locale'
import { PageBody, PageContainer, PageSection, PageTitle } from 'components/PageLayout'
import { ImagePreview } from 'components/Dropzone'
import { getCloudinaryImage } from 'utils'
import Slick, { SlickItem } from 'components/Slick'
import ScrollToTopOnMount from 'components/ScrollToTopOnMount'
import Surface from 'components/Surface'
import motorcyclePostsAPI from 'services/motorcyclePostAPI'

function MotorcyclePostPage() {
  const { postId } = useParams()
  const [imgIndex, setImgIndex] = useState(0)
  const { error, data: post } = useQuery({
    queryFn: async () => motorcyclePostsAPI.find(postId)
  })

  if (error) {
    return 'Ha ocurrido un error'
  }

  const handleChange = (goTo) => {
    if (goTo !== imgIndex) { setImgIndex(goTo) }
  }
  console.log({ post })

  return (
    <PageContainer>
      <ScrollToTopOnMount />
      <PageBody py='5'>
        <PageSection fontSize='sm'>
          <Flex direction='column' gap={5}>
            <Stack spacing={1}>
              <Skeleton isLoaded={post} maxWidth={!post && '400px'}>
                <PageTitle>
                  {`${post?.motorcycle?.brand} - ${post?.motorcycle?.model}`}
                </PageTitle>
              </Skeleton>
              <Skeleton isLoaded={post} maxWidth={!post && '400px'}>
                Publicado {
                  post && formatDistance(
                    new Date(post.publishedDate),
                    new Date(),
                    { addSuffix: true, locale: es }
                  )
                }
              </Skeleton>
            </Stack>
            <Surface
              display='flex'
              flexDirection='column'
              justifyContent='center'
              maxWidth='container.xl'
            >
              <Flex
                direction='column'
                gap='4'
              >
                <Flex maxH='500px' minH='400px'>
                  {post && (
                    <LazyLoadImage
                      src={getCloudinaryImage({ publicId: post?.files?.[imgIndex].public_id, w: '1400' })}
                      alt={`${post?.motorcycle?.brand} - ${post?.motorcycle?.model}`}
                      style={{ objectFit: 'contain' }}
                    />
                  )}
                </Flex>
                <chakra.div style={{ contain: 'paint' }}>
                  {post && (
                    <Slick
                      className='highlight-motorcycle'
                      solidArrows
                      hideArrows={false}
                      slidesToShow={5}
                      slidesToScroll={1}
                      speed={300}
                      responsive={responsiveSettings}
                      beforeChange={(oldIndex, index) => {
                        if (index !== oldIndex) {
                          setImgIndex(index)
                        }
                      }}
                      focusOnSelect
                    >
                      {post.files.map((file, index) => (
                        <SlickItem
                          key={index} onClick={() => handleChange(index)}
                        >
                          <ImagePreview
                            file={getCloudinaryImage({ publicId: file.public_id, w: '600' })}
                            alt={`${post?.motorcycle?.brand} - ${post?.motorcycle?.model}`}
                            h='170px'
                            cursor='pointer'
                          />
                        </SlickItem>
                      ))}
                    </Slick>
                  )}
                </chakra.div>
                <Flex direction='column' gap={5}>
                  <PageSection title='Informaci??n del vendedor' padding='0' m='0' w='full'>
                    <Stack mt='2' pl='2'>
                      <InfoField label='Nombre' value={post?.seller?.name} />
                      <InfoField label='Correo electr??nico' value={post?.seller?.email} />
                      <InfoField label='Tel??fono principal' value={post?.seller?.mainPhone} />
                      <InfoField label='Tel??fono secundario' value={post?.seller?.secondaryPhone} />
                    </Stack>
                  </PageSection>
                  <PageSection title='Datos de la Motocicleta' padding='0' m='0' w='full'>
                    <Stack mt='2' pl='2'>
                      <InfoField label='Marca' value={post?.motorcycle?.brand} />
                      <InfoField label='Modelo' value={post?.motorcycle?.model} />
                      <InfoField label='Estilo' value={post?.motorcycle?.style} />
                      <InfoField label='Placa' value={post?.motorcycle?.licensePlate} />
                      <InfoField label='A??o' value={post?.motorcycle?.year} />
                      <InfoField label='Estado' value={post?.motorcycle?.status} />
                      <InfoField label='Precio' value={post?.motorcycle?.price} />
                      <InfoField label='Color exterior' value={post?.motorcycle?.outsideColor} />
                      <InfoField label='Kilometraje' value={post?.motorcycle?.mileage} />
                      <InfoField label='Provincia' value={post?.province} />
                      <InfoField label='Comentario adicional' value={post?.motorcycle?.secondaryPhone} />
                      <Divider />
                      <Flex gap='2' flexWrap='wrap'>
                        {post?.motorcycle?.equipment.map((item, index) => (
                          <Tag colorScheme='green' key={index}>{item}</Tag>
                        ))}
                      </Flex>
                    </Stack>
                  </PageSection>
                </Flex>
              </Flex>
            </Surface>
          </Flex>
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

function InfoField({ label, value, showDivider = true }) {
  return (
    <>
      {showDivider && <Divider />}
      <Grid
        display='grid'
        alignItems='center'
        flexDirection='row'
        gridTemplateColumns={{
          base: '1fr',
          md: 'minmax(170px, 20%) 1fr'
        }}
        gap={{
          base: '2',
          md: '4'
        }}
        w='full'
      >
        <GridItem
          display='flex'
          h='full'
          fontWeight='semibold'
          gap='3'
        >
          <chakra.span fontWeight='bold'>
            {label}
          </chakra.span>
        </GridItem>
        <GridItem alignItems='center'>
          {value}
        </GridItem>
      </Grid>
    </>
  )
}

const responsiveSettings = [
  {
    breakpoint: 1653,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1536,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }
]

export default MotorcyclePostPage
