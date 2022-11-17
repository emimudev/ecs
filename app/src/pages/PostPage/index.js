import { useEffect, useState } from 'react'
import { Flex, Skeleton, Stack, chakra, Divider, Grid, GridItem, Tag } from '@chakra-ui/react'
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
import carPostsAPI from 'services/carPostsAPI'

function PostPage() {
  const { postId } = useParams()
  const [imgIndex, setImgIndex] = useState(0)
  const [state, setState] = useState({
    post: null,
    isLoading: true,
    isError: false
  })
  const { error, post } = state

  useEffect(() => {
    carPostsAPI.find(postId)
      .then((data) => {
        setState({ post: data, isLoading: false, isError: false })
      })
  }, [postId])

  if (error) {
    return 'Ha ocurrido un error'
  }

  const handleChange = (goTo) => {
    console.log(goTo)
    if (goTo !== imgIndex) { setImgIndex(goTo) }
  }
  console.log({ files: post?.files })

  return (
    <PageContainer>
      <ScrollToTopOnMount />
      <PageBody py='5'>
        <PageSection fontSize='sm'>
          <Flex direction='column' gap={5}>
            <Stack spacing={1}>
              <Skeleton isLoaded={post} maxWidth={!post && '400px'}>
                <PageTitle>
                  {`${post?.car?.brand} - ${post?.car?.model}`}
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
                      src={getCloudinaryImage({ publicId: post?.files?.[imgIndex]?.public_id, w: '1400' })}
                      alt={`${post?.car?.brand} - ${post?.car?.model}`}
                      style={{ objectFit: 'contain' }}
                    />
                  )}
                </Flex>
                <chakra.div style={{ contain: 'paint' }}>
                  {post && (
                    <Slick
                      className='highlight-carrousel'
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
                          key={file.public_id} onClick={() => handleChange(index)}
                        >
                          <ImagePreview
                            file={getCloudinaryImage({ publicId: file.public_id, w: '600' })}
                            alt={`${post?.car?.brand} - ${post?.car?.model}`}
                            h='170px'
                            cursor='pointer'
                          />
                        </SlickItem>
                      ))}
                    </Slick>
                  )}
                </chakra.div>
                <Flex direction='column' gap={5}>
                  <PageSection title='Información del vendedor' padding='0' m='0' w='full'>
                    <Stack mt='2' pl='2'>
                      <InfoField label='Nombre' value={post?.seller?.name} />
                      <InfoField label='Correo electrónico' value={post?.seller?.email} />
                      <InfoField label='Teléfono principal' value={post?.seller?.mainPhone} />
                      <InfoField label='Teléfono secundario' value={post?.seller?.secondaryPhone} />
                    </Stack>
                  </PageSection>
                  <PageSection title='Datos del vehículo' padding='0' m='0' w='full'>
                    <Stack mt='2' pl='2'>
                      <InfoField label='Marca' value={post?.car?.brand} />
                      <InfoField label='Modelo' value={post?.car?.model} />
                      <InfoField label='Estilo' value={post?.car?.style} />
                      <InfoField label='Placa' value={post?.car?.licensePlate} />
                      <InfoField label='Año' value={post?.car?.year} />
                      <InfoField label='Estado' value={post?.car?.status} />
                      <InfoField label='Precio' value={post?.car?.price} />
                      <InfoField label='Color exterior' value={post?.car?.outsideColor} />
                      <InfoField label='Color interior' value={post?.car?.insideColor} />
                      <InfoField label='Kilometraje' value={post?.car?.mileage} />
                      <InfoField label='Número de puertas' value={post?.car?.doorsNumber} />
                      <InfoField label='Provincia' value={post?.province} />
                      <InfoField label='Comentario adicional' value={post?.car?.secondaryPhone} />
                      <Divider />
                      <Flex gap='2' flexWrap='wrap'>
                        {post?.car?.equipment.map((item, index) => (
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

export default PostPage
