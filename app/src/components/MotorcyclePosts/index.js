import { Box, CircularProgress, SimpleGrid, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setMotorcyclesData, setTotalPages } from 'redux/slices/MotorcyclePosts'

import motorcyclePostsAPI from 'services/motorcyclePostAPI'

import EmptySearch from './EmptySearch'
import MotorcycleCard from './MotorcycleCard'
import Pagination from './Pagination'

function MotorcyclePosts({ loading, setLoading }) {
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
    motorcyclesData
  } = useSelector(state => state.motorcyclePosts)
  const dispatch = useDispatch()
  useEffect(() => {
    setLoading(true)
    if (isFiltered) {
      motorcyclePostsAPI.getPostBySearch(pageNumber, model, yearValues.join(','), priceValues.join(','), brandValues.join(','), province, carsStyles).then(({ totalPages, posts }) => {
        dispatch(setMotorcyclesData(posts))
        dispatch(setTotalPages(totalPages))
        setLoading(false)
      })
    } else {
      motorcyclePostsAPI.getPage(pageNumber).then(({ totalPages, posts }) => {
        dispatch(setMotorcyclesData(posts))
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
        : (motorcyclesData.length === 0
            ? <EmptySearch />
            : (
              <>
                <SimpleGrid minChildWidth='250px' spacingX='45px' spacingY='40px'>
                  {motorcyclesData.map((element, i) => (
                    <Box key={i}><MotorcycleCard title={i} {...element} currencyType='cr' /></Box>
                  ))}
                </SimpleGrid>
                <Pagination />
              </>
              )
          )}
    </>
  )
}

export default MotorcyclePosts
