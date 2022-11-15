import { GridItem, chakra, Grid, AccordionButton, AccordionIcon, AccordionPanel, Box, Text } from '@chakra-ui/react'

function FilterField({
  acTitle,
  label,
  isInline = false,
  direction = 'row',
  labelAlign = 'center',
  isExpanded = true,
  children
}) {
  return (
    <>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            <Text fontSize='2xl' as='b' color='#f687b3'>{acTitle}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>

        <Grid
          display={isInline ? 'flex' : 'grid'}
          alignItems='center'
          flexDirection={direction}
          gridTemplateColumns={{
            base: '1fr',
            md: !isInline ? 'minmax(125px, 10%) 1fr' : '1fr'
          }}
          gap={{
            base: '2',
            md: !isInline ? '10' : '4'
          }}
          w='full'
        >
          <GridItem
            display='flex'
            alignItems={labelAlign}
            flex='1'
            h='full'
            fontWeight='semibold'
            gap='3'
          >
            <chakra.span>
              {label}
            </chakra.span>
            <chakra.span
              display='flex'
              fontSize='12px'
              fontWeight='normal'
              _light={{
                color: 'gray.300'
              }}
              _dark={{
                color: 'gray.500'
              }}
            />
          </GridItem>
          <GridItem alignItems='center' mr={8}>
            {isExpanded ? children : null}
          </GridItem>
        </Grid>
      </AccordionPanel>
    </>

  )
}

export default FilterField
