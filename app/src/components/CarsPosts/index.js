import { Box, CircularProgress, Grid, SimpleGrid, Stack } from '@chakra-ui/react'
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
        : (carsData.length === 0 /* eslint-disable */
          ? <EmptySearch />
          : (
            <>
              <Grid
                gridTemplateColumns={{
                  base: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
                  xl: 'repeat(5, 1fr)'
                }}
                gap='5'
              >
                {carsData.map((element, i) => (
                  <CarsCards key={i} title={i} {...element} />
                ))}
              </Grid>
              <Pagination />
            </>
          )
        )/* eslint-enable */}
    </>
  )
}

export default CarsPosts
