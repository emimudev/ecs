import { Flex, Grid, Skeleton } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCarData, setTotalPages } from 'redux/slices/CarPosts'
import carPostsAPI from 'services/carPostsAPI'
import CarsCards from './CarsCards'
import EmptySearch from './EmptySearch'
import Pagination from './Pagination'

function CarsPosts({ loading, setLoading }) {
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
      {loading /* eslint-disable */
        ? (
          <Grid
            gridTemplateColumns={{
              base: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
              xl: 'repeat(5, 1fr)'
            }}
            gap='5'
          >
            {new Array(15).fill(0, 0).map((element, i) => (
              <Flex key={i} w='full' h='140px' borderRadius='lg' overflow='hidden'>
                <Skeleton w='full' h='full' />
              </Flex>
            ))}
          </Grid>
        )
        : (carsData.length === 0
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
