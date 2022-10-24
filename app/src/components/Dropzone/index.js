import { useState } from 'react'
import { Alert, AlertIcon, Flex, Skeleton } from '@chakra-ui/react'
import { useDropzone } from 'react-dropzone'
import { formatBytes } from 'utils'
import DropzoneFiles from 'components/Illustrations/DropzoneFiles'
import Slick, { SlickItem } from 'components/Slick'
import { LazyLoadImage } from 'react-lazy-load-image-component'

/**
 * @param {import('react-dropzone').DropzoneOptions|{name: string, children: React.ReactNode}} params
 */
function Dropzone({ name, children, ...props }) {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ ...props })
  const { disabled = false, maxSize, maxFiles } = props
  return (
    <Flex flexDirection='column' gap='5'>
      <Flex
        gap='2'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        border='5px dotted'
        borderRadius='lg'
        py='7'
        px='4'
        _dark={{
          bg: isDragActive ? 'blue.800' : 'whiteAlpha.50',
          borderColor: isDragActive ? 'blue.300' : 'gray.500'
        }}
        _light={{
          bg: isDragActive ? 'blue.50' : 'blackAlpha.100',
          borderColor: isDragActive ? 'blue.600' : 'gray.500'
        }}
        userSelect='none'
        opacity={disabled && '.4'}
        cursor={!disabled && 'pointer'}
        {...getRootProps()}
      >
        <input name={name} {...getInputProps()} />
        {children && children}
        {!children && (
          <>
            <Flex
              width='full'
              maxW='150px'
            >
              <DropzoneFiles width='100%' />
            </Flex>
            <Flex
              textAlign='center'
              fontWeight='semibold'
              _light={{ color: 'blackAlpha.600' }}
              fontSize='md'
            >
              Arrastre los archivos o haga click aquí para cargar imágenes
            </Flex>
            <Flex
              textAlign='center'
              _light={{ color: 'blackAlpha.600' }}
              _dark={{ color: 'whiteAlpha.700' }}
              fontSize='sm'
              gap='2'
              w='50%'
              justifyContent='space-around'
              flexWrap='wrap'
            >
              <span>Tamaño permitido: {formatBytes(maxSize)}</span>
              {Boolean(maxFiles) && (
                <span>Cantidad: {maxFiles} archivos</span>
              )}
            </Flex>
          </>
        )}
      </Flex>
      <div style={{ contain: 'paint' }}>
        <div>
          <Slick
            initialSlide={0}
            solidArrows
            hideArrows={false}
            slidesToShow={5}
            slidesToScroll={1}
            speed={200}
            infinite
            responsive={responsiveSettings}
          >
            {acceptedFiles.map((file) => (
              <SlickItem key={file.lastModified}>
                <ImagePreview file={file} />
              </SlickItem>
            ))}
          </Slick>
        </div>
        <Flex>
          {fileRejections.length > 0 && (
            <Alert status='error' borderRadius='lg'>
              <AlertIcon />
              No se pudieron cargar las imágenes, por favor inténtelo de nuevo.
            </Alert>
          )}
        </Flex>
      </div>
    </Flex>
  )
}

function ImagePreview({ file }) {
  const [src, setSrc] = useState(null)
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.addEventListener('load', () => {
    setSrc(reader.result)
  }, false)

  return (
    <Flex
      justifyContent='center'
      w='100%'
      h='270px'
      _dark={{
        bg: 'gray.700'
      }}
      _light={{
        bg: 'gray.300'
      }}
      borderRadius='lg'
      overflow='hidden'
    >
      <LazyLoadImage
        loading='lazy'
        placeholder={<Skeleton w='full' h='full' />}
        src={src}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          height: '100%'
        }}
        alt={file.name}
      />
    </Flex>
  )
}

const responsiveSettings = [
  {
    breakpoint: 1500,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1144,
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

export default Dropzone
