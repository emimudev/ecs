import { Box, CircularProgress, SimpleGrid, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setCarData, setTotalPages } from 'redux/slices/CarPosts'
import carPostsAPI from 'services/carPostsAPI'
import CarsCards from './CarsCards'
import EmptySearch from './EmptySearch'
import Pagination from './Pagination'

function CarsPosts() {
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
    pageNumber,
    carsData
  } = useSelector(state => state.carPosts)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    if (isFiltered) {
      carPostsAPI.getPostBySearch(pageNumber, model, yearValues.join(','), priceValues.join(','), brandValues.join(','), province, carsStyles).then(({ totalPages, posts }) => {
        dispatch(setCarData(posts))
        dispatch(setTotalPages(totalPages))
        setLoading(false)
      })
    } else {
      carPostsAPI.getPage(pageNumber).then(({ totalPages, posts }) => {
        dispatch(setCarData(posts))
        dispatch(setTotalPages(totalPages))
        setLoading(false)
      })
    }
  }, [pageNumber])

  return (
    <>
      {loading
        ? (
          <Stack
            textAlign='center'
            align='center'
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
          >
            <CircularProgress isIndeterminate color='pink.500' />
          </Stack>)
        : (carsData.length === 0
            ? <EmptySearch />
            : (
              <>
                <SimpleGrid minChildWidth='250px' spacingX='45px' spacingY='40px'>
                  {carsData.map((element, i) => (
                    <Box key={i}><CarsCards title={i} {...element} /></Box>
                  ))}
                </SimpleGrid>
                <Pagination />
              </>
              )
          )}
    </>
  )
}

export default CarsPosts
