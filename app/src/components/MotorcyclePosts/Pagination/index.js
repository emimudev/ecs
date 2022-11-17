import { Button, Container, HStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage, goToNextPage, goToPreviousPage } from 'redux/slices/CarPosts'

function Pagination() {
  const {
    pageNumber,
    totalPages
  } = useSelector(state => state.carPosts)
  const dispatch = useDispatch()
  function changePageClick(event) {
    const pageNumber = Number(event.target.textContent) - 1
    dispatch(changePage(pageNumber))
  }
  const color = useColorModeValue('gray.800', 'whiteAlpha.900')
  const pages = new Array(totalPages).fill(null).map((v, i) => i)
  return (
    <Container mt='25px' mb='25px' maxW='2xl' centerContent>
      <HStack>
        <Button
          variant='solid'
          colorScheme='pink'
          bg='pink.400'
          size={['xs', 'sm', 'md']}
          onClick={() => dispatch(goToPreviousPage())}
          _focus={{ boxShadow: 'none' }}
          disabled={(pageNumber === 0)}
          w='fit-content'
          color={color}
        >
          anterior
        </Button>
        {pages.map((item, index) => (
          <Button
            colorScheme='pink'
            bg='pink.400'
            size={['xs', 'sm', 'md']}
            key={index}
            onClick={changePageClick}
            _focus={{ boxShadow: 'none' }}
            w='fit-content'
            variant={(pageNumber === item ? 'solid' : 'ghost')}
            color={color}
          >
            {item + 1}
          </Button>
        ))}

        <Button
          variant='solid'
          colorScheme='pink'
          bg='pink.400'
          size={['xs', 'sm', 'md']}
          onClick={() => dispatch(goToNextPage())}
          _focus={{ boxShadow: 'none' }}
          disabled={(pageNumber + 1 === totalPages)}
          w='fit-content'
          color={color}
        >
          siguiente
        </Button>
      </HStack>
    </Container>
  )
}

export default Pagination
