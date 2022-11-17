import React from 'react'
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useBreakpointValue,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import CarsFilters from './CarsFilters'
import { BiSearchAlt } from 'react-icons/bi'
import { defaultPage, filter, setCarData, setTotalPages, unFilter } from 'redux/slices/CarPosts'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilters } from 'redux/slices/Filters'
import carPostsAPI from 'services/carPostsAPI'
import { AiFillFilter, AiOutlineFilter } from 'react-icons/ai'

const FilterDrawer = ({ type = 'cars' }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const dispatch = useDispatch()
  const bg = useColorModeValue('gray.100', 'gray.700')
  const color = useColorModeValue('gray.800', 'whiteAlpha.900')
  const {
    model,
    yearValues,
    priceValues,
    brandValues,
    province,
    carsStyles
  } = useSelector(state => state.filters)

  const {
    pageNumber,
    isFiltered
  } = useSelector(state => state.carPosts)

  function filterData() {
    carPostsAPI.getPostBySearch(
      pageNumber,
      model,
      yearValues.join(','),
      priceValues.join(','),
      brandValues.join(','),
      province,
      carsStyles
    )
      .then(({ totalPages, posts }) => {
        dispatch(setCarData(posts))
        dispatch(setTotalPages(totalPages))
      })
  }

  function resetData() {
    carPostsAPI.getPage(pageNumber).then(({ totalPages, posts }) => {
      dispatch(setCarData(posts))
      dispatch(setTotalPages(totalPages))
    })
  }

  return (
    <>
      <Button
        size={['sm', 'md']}
        leftIcon={isFiltered ? <AiFillFilter /> : <AiOutlineFilter />}
        ref={btnRef}
        colorScheme={isFiltered ? 'pink' : 'gray'}
        bg={isFiltered ? 'pink.400' : bg}
        color={color}
        onClick={onOpen}
      >
        Filtros
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={useBreakpointValue({ base: 'xs', sm: 'sm', md: 'md' })}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text
              fontSize='4xl' flex-direction='row'
              display='flex'
              alignItems='center'
            >
              Buscar {' '} <BiSearchAlt m='10px' color='#f687b3' />
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <CarsFilters filterType={type} />
          </DrawerBody>

          <DrawerFooter>
            <Button
              borderRadius='full'
              fontSize='sm'
              onClick={() => {
                dispatch(resetFilters())
                dispatch(defaultPage())
                dispatch(unFilter())
                resetData()
                onClose()
              }}
            >
              Quitar Filtros
            </Button>
            <Button
              colorScheme='pink'
              bg='pink.500'
              color='white'
              borderRadius='full'
              fontSize='sm'
              onClick={() => {
                dispatch(defaultPage())
                dispatch(filter())
                filterData()
              }}
            >Filtrar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default FilterDrawer
