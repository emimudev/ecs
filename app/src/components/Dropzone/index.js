import { useState, useRef } from 'react'
import { Alert, AlertIcon, Flex, Skeleton } from '@chakra-ui/react'
import { useDropzone } from 'react-dropzone'
import { formatBytes } from 'utils'
import DropzoneFiles from 'components/Illustrations/DropzoneFiles'
import Slick, { SlickItem } from 'components/Slick'
import { LazyLoadImage } from 'react-lazy-load-image-component'

/**
 * @param {import('react-dropzone').DropzoneOptions|{name: string, children: React.ReactNode, isError: Boolean}} params
 */
function Dropzone({ name, children, onDropAccepted, isError = false, ...props }) {
  const slickRef = useRef()
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    ...props,
    onDropAccepted: (files, event) => {
      onDropAccepted?.(files, event)
      slickRef.current?.onLoad()
    }
  })
  const { disabled = false, maxSize, maxFiles } = props

  return (
    <Flex flexDirection='column' gap='3'>
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
          borderColor: isError ? 'red.400' : isDragActive ? 'blue.300' : 'gray.500'
        }}
        _light={{
          bg: isDragActive ? 'blue.50' : 'blackAlpha.100',
          borderColor: isError ? 'red.400' : isDragActive ? 'blue.600' : 'gray.500'
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
            ref={slickRef}
            solidArrows
            hideArrows={false}
            slidesToShow={5}
            slidesToScroll={1}
            speed={200}
            responsive={responsiveSettings}
          >
            {acceptedFiles.map((file) => (
              <SlickItem key={file.name}>
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

export function ImagePreview({ file, alt, ...props }) {
  const [src, setSrc] = useState(typeof file === 'string' ? file : null)
  const reader = new FileReader()

  if (typeof file !== 'string') {
    reader.readAsDataURL(file)
    reader.addEventListener('load', () => {
      setSrc(reader.result)
    }, false)
  }

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
      {...props}
    >
      <LazyLoadImage
        loading='eager'
        placeholder={<Skeleton w='full' h='full' />}
        src={src}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100%',
          height: '100%'
        }}
        alt={alt ?? file.name}
      />
    </Flex>
  )
}

const responsiveSettings = [
  {
    breakpoint: 1653,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
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
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

export default Dropzone
