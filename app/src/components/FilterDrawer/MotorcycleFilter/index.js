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

import { BiSearchAlt } from 'react-icons/bi'

import { useDispatch, useSelector } from 'react-redux'
import { resetFilters } from 'redux/slices/Filters'

import { AiFillFilter, AiOutlineFilter } from 'react-icons/ai'
import motorcyclePostsAPI from 'services/motorcyclePostAPI'
import { defaultPage, filter, setMotorcyclesData, setTotalPages, unFilter } from 'redux/slices/MotorcyclePosts'
import CarsFilters from '../CarsFilters'

const FilterDrawerMotorcycle = ({ type = 'cars', loading, setLoading }) => {
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
    isFiltered,
    pageNumber
  } = useSelector(state => state.motorcyclePosts)
  function filterData() {
    setLoading(true)
    motorcyclePostsAPI.getPostBySearch(pageNumber, model, yearValues.join(','), priceValues.join(','), brandValues.join(','), province, carsStyles).then(({ totalPages, posts }) => {
      dispatch(setMotorcyclesData(posts))
      dispatch(setTotalPages(totalPages))
      setLoading(false)
    })
  }
  function resetData() {
    setLoading(true)
    motorcyclePostsAPI.getPage(pageNumber).then(({ totalPages, posts }) => {
      dispatch(setMotorcyclesData(posts))
      dispatch(setTotalPages(totalPages))
      setLoading(false)
    })
  }
  return (
    <>
      <Button size={['sm', 'md']} leftIcon={isFiltered ? <AiFillFilter /> : <AiOutlineFilter />} ref={btnRef} colorScheme={isFiltered ? 'pink' : 'gray'} bg={isFiltered ? 'pink.400' : bg} color={color} onClick={onOpen}>
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
              disabled={loading}
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
              disabled={loading}
            >Filtrar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default FilterDrawerMotorcycle
