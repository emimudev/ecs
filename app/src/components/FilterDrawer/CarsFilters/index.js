import { Accordion, AccordionItem, Checkbox, CheckboxGroup, Grid, GridItem, Image, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Tooltip, Select, Box, useColorModeValue, RangeSliderMark, Tag, VStack, SimpleGrid, TagLabel } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBrandValues, setCars, setCarsStyles, setModel, setMotorcycle, setPriceValues, setProvince, setYearValues } from 'redux/slices/Filters'
import { CarsStyles, MotorcycleStyles, SelectProvinces } from 'utils'
import { ElectricCarBrandList, MotorCycleBrandList } from 'utils/Brands'

import FilterField from '../FilterField'

const CarsFilters = ({ filterType = 'cars' }) => {
  const bg = useColorModeValue('gray.100', 'gray.600')
  const color = useColorModeValue('gray.800', 'whiteAlpha.900')
  const [showTooltip, setShowTooltip] = React.useState(false)
  const {
    model,
    yearValues,
    priceValues,
    brandValues,
    minPrice,
    minYear,
    maxPrice,
    maxYear
  } = useSelector(state => state.filters)
  const dispatch = useDispatch()

  useEffect(() => {
    if (filterType === 'cars') {
      dispatch(setCars())
    } else if (filterType === 'motorcycle') {
      dispatch(setMotorcycle())
    }
  }, [filterType])
  function RenderCheckBox({ brand }) {
    return (
      <GridItem>
        <Checkbox
          w='50%'
          key={brand.name} value={brand.slug} spacing='1.5rem'
          onChange={(e) => {
            if (brandValues.includes(e.target.value)) {
              dispatch(setBrandValues(brandValues.filter((item) => item !== e.target.value)))
            } else {
              dispatch(setBrandValues(brandValues.concat([e.target.value])))
            }
          }}
        >
          <VStack align='center'>
            <Image src={brand.image.optimized} width='90%' marginBottom={2} />
          </VStack>
          <Tag alignItems='center' size={['sm', 'md']} variant='solid' bg='#f687b3' color={color}>
            <TagLabel>{brand.name}</TagLabel>
          </Tag>
        </Checkbox>
      </GridItem>
    )
  }
  function RenderCarBrands() {
    return (
      <SimpleGrid columns={2} spacingX={['45px', '25px']} spacingY='25px'>
        {ElectricCarBrandList.map((brand, i) => {
          return (
            <RenderCheckBox key={i} brand={brand} />
          )
        })}
      </SimpleGrid>
    )
  }
  function RenderMotorcycleBrands() {
    return (
      <SimpleGrid columns={2} spacingX={['45px', '25px']} spacingY='25px'>
        {
          MotorCycleBrandList.map((brand, i) => {
            return (
              <RenderCheckBox key={i} brand={brand} />
            )
          })
        }
      </SimpleGrid>
    )
  }

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <FilterField
          acTitle='Modelo'
          label='Modelo'
        >
          <Input
            bg={bg}
            onChange={(e) => {
              dispatch(setModel([e.target.value]))
            }}
            value={model}
            size='sm' _placeholder={color} placeholder='Escriba el nombre de la modelo'
          />
        </FilterField>
      </AccordionItem>
      <AccordionItem>
        <FilterField
          acTitle='Marca'
          label=''
          isInline
        >
          <CheckboxGroup colorScheme='pink' defaultValue={brandValues}>
            {filterType === 'cars' && <RenderCarBrands />}
            {filterType === 'motorcycle' && <RenderMotorcycleBrands />}
          </CheckboxGroup>
        </FilterField>
      </AccordionItem>
      <AccordionItem>
        {({ isExpanded }) => (
          <FilterField
            acTitle='Precio'
            label='Precio'
            isExpanded={isExpanded}
          >
            <RangeSlider
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              borderRadius='10px'
              bg={bg}
              m='20px'
              defaultValue={priceValues}
              min={minPrice} max={maxPrice}
              step={(filterType === 'cars') ? 500000 : 100000}
              onBlur={(e) => {
                // console.log(`Precio: ${priceValues}`)
                const valor = e.target.value
                // dispatch(setPriceValues(valor))
              }}
              onChange={(v) => {
                dispatch(setPriceValues(v))
              }}
            >
              <RangeSliderMark placement='top' value={minPrice} mt='5' fontSize='sm' color={color}>
                {new Intl.NumberFormat('es-CR').format(minPrice)}₡
              </RangeSliderMark>
              <RangeSliderMark placement='top' value={maxPrice - maxPrice * 0.30} mt='5' mr='10' fontSize='sm' color={color}>
                {new Intl.NumberFormat('es-CR').format(maxPrice)}₡
              </RangeSliderMark>
              <RangeSliderTrack bg='pink.100'>
                <RangeSliderFilledTrack bg='#f687b3' />
              </RangeSliderTrack>
              <Tooltip
                hasArrow
                bg='#f687b3'
                label={`${new Intl.NumberFormat('es-CR').format(priceValues[0])} ₡`}
                color={color}
                placement='top-end'
                isOpen={showTooltip}
              >
                <RangeSliderThumb boxSize={6} index={0} />
              </Tooltip>
              <Tooltip
                hasArrow
                bg='#f687b3'
                label={`${new Intl.NumberFormat('es-CR').format(priceValues[1])} ₡`}
                color={color}
                placement='top-start'
                isOpen={showTooltip}
              >
                <RangeSliderThumb boxSize={6} index={1} />
              </Tooltip>
            </RangeSlider>

          </FilterField>)}
      </AccordionItem>
      <AccordionItem>
        {({ isExpanded }) => (
          <FilterField
            acTitle='Año'
            label='Año'
            isExpanded={isExpanded}
          >
            <RangeSlider
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              borderRadius='10px'
              bg={bg}
              m='20px' defaultValue={yearValues} min={minYear} max={maxYear} step={1}
              onBlur={(e) => {
                // console.log(`Año: ${yearValues}`)
                const valor = e.target.value
              }}
              onChange={(v) => {
                dispatch(setYearValues(v))
              }}
            >
              <RangeSliderMark placement='top' value={minYear} mt='5' fontSize='sm' color={color}>
                1996
              </RangeSliderMark>
              <RangeSliderMark placement='top' value={maxYear - 2} mt='5' mr='10' fontSize='sm' color={color}>
                2022
              </RangeSliderMark>
              <RangeSliderTrack bg='red.100'>
                <RangeSliderFilledTrack bg='#f687b3' />
              </RangeSliderTrack>
              <Tooltip
                hasArrow
                bg='#f687b3'
                color={color}
                placement='top'
                isOpen={showTooltip}
                label={`${yearValues[0]}`}
              >
                <RangeSliderThumb boxSize={6} index={0} />
              </Tooltip>
              <Tooltip
                hasArrow
                bg='#f687b3'
                color={color}
                placement='top'
                label={`${yearValues[1]}`}
                isOpen={showTooltip}
              >
                <RangeSliderThumb boxSize={6} index={1} />
              </Tooltip>
            </RangeSlider>
          </FilterField>)}
      </AccordionItem>
      <AccordionItem>
        <FilterField
          acTitle='Ubicación'
          label='Ubicación'
        >
          <Select
            bg={bg}
            placeholder='Seleccionar opción'
            onBlur={(e) => {
              // console.log(`Ubicación: ${province}`)
              const valor = e.target.value
            }}
            onChange={(e) => {
              dispatch(setProvince(e.target.value))
            }}
          >
            {SelectProvinces.map(
              (province) => <option bg={bg} key={province.value} value={province.value}>{province.label}</option>
            )}
          </Select>
        </FilterField>
      </AccordionItem>
      <AccordionItem>
        <FilterField
          acTitle='Estilo'
          label='Estilo'
        >
          <Select
            bg={bg}
            placeholder='Seleccionar opcion'
            onBlur={(e) => {
              // console.log(`Estilo: ${carsStyles}`)
              const valor = e.target.value
            }}
            onChange={(e) => {
              dispatch(setCarsStyles(e.target.value))
            }}
          >
            {
              filterType === 'cars' &&
                <>
                  {
                  CarsStyles.map(
                    (cars) => <option key={cars.value} value={cars.value} bg={bg}>{cars.label}</option>
                  )
                  }
                </>
              }
            {
              filterType === 'motorcycle' &&
                <>
                  {
                    MotorcycleStyles.map(
                      (motorcycle) => <option key={motorcycle.value} value={motorcycle.value} bg={bg}>{motorcycle.label}</option>
                    )
                  }
                </>
              }

          </Select>
        </FilterField>
      </AccordionItem>
    </Accordion>
  )
}

export default CarsFilters
