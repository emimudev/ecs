import {
  Box,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Switch,
  Textarea,
  chakra
} from '@chakra-ui/react'
import { FastField, Field } from 'formik'
import { Select } from 'chakra-react-select'

/**
 * @param {Object} params
 * @param {import("react").HTMLInputTypeAttribute|'switch'|'textarea'|'select'} [params.type='text']
 * @param {import('react').ReactComponentElement} [params.component=Input]
 * @param {Boolean} [params.isFast = true]
 * @param {string} params.label
 * @param {string} params.name
 * @param {string} params.placeholder
 * @param {*} params.inputProps
 */
function FieldForm({
  type = 'text',
  isFast = true,
  component,
  label,
  name = '',
  size,
  variant = 'filled',
  placeholder,
  isRequired = true,
  helperText = '',
  ...props
}) {
  const ControlledInput = isFast ? FastField : Field
  const InputRender = component || specialInputType[type]
  const defaultInputProps = {
    variant,
    size: size ?? (type === 'checkbox' || type === 'switch' ? 'md' : 'sm'),
    borderRadius: 'md',
    ...props
  }
  const _placeholder = placeholder && `${placeholder}...`
  return (
    <ControlledInput name={name}>
      {({ field, form, meta }) => {
        return (
          <FormControl
            display='flex'
            flexDirection='column'
            fontSize='sm'
            isInvalid={meta.touched && meta.error}
          >
            {label && (
              <FormLabel
                fontSize='sm'
                mr='0'
                gap={2}
                display='flex'
                justifyContent='space-between'
              >
                {label}
                {!isRequired && (
                  <chakra.span
                    fontWeight='normal'
                    _light={{
                      color: 'gray.300'
                    }}
                    _dark={{
                      color: 'gray.500'
                    }}
                  >
                    (Opcional)
                  </chakra.span>
                )}
              </FormLabel>
            )}
            {InputRender /* eslint-disable indent */
              ? (
                <InputRender
                  type={type}
                  placeholder={_placeholder}
                  field={field}
                  form={form}
                  meta={meta}
                  {...defaultInputProps}
                />
              )
              : (
                <Input
                  type={type}
                  placeholder={_placeholder}
                  _light={lightStyles}
                  _dark={darkStyles}
                  {...field}
                  {...defaultInputProps}
                />
              ) /* eslint-enable indent */}
            {helperText && (
              <FormHelperText mt={1} fontSize='12px' textAlign='start'>
                {helperText}
              </FormHelperText>
            )}
          </FormControl>
        )
      }}
    </ControlledInput>
  )
}

function FieldNumber({ field, form, meta, showControls = false, ...props }) {
  return (
    <NumberInput {...props}>
      <NumberInputField {...field} _dark={darkStyles} _light={lightStyles} {...props} />
      {showControls && (
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      )}
    </NumberInput>
  )
}

function FieldSwitch({ field, form, meta, ...props }) {
  return (
    <Switch alignSelf='flex-start' {...field} {...props} />
  )
}

function FieldSelect({
  field,
  form,
  meta,
  options,
  multiColorScheme = 'green',
  colorScheme = 'blue',
  isMulti = false,
  placeholder,
  noOptionsMessage = ({ inputValue }) => 'No hay coincidencias',
  ...props
}) {
  const { name, onBlur, value } = field
  const handleChange = (item) => {
    if (item && !isMulti) {
      form.setFieldValue(name, item.value)
    } else if (item && isMulti) {
      form.setFieldValue(name, item.map(it => it.value))
    } else {
      form.setFieldValue(name, isMulti ? [] : '')
    }
  }
  return (
    <Select
      className='custom-select'
      name={name}
      onBlur={onBlur}
      colorScheme={multiColorScheme}
      selectedOptionColor='blue'
      selectedOptionStyle='check'
      value={options ? options.find(option => option.value === value) : ''}
      onChange={handleChange}
      options={options}
      isClearable
      isMulti={isMulti}
      noOptionsMessage={noOptionsMessage}
      placeholder={(
        <chakra.span noOfLines={1}>
          {placeholder}
        </chakra.span>
      )}
      chakraStyles={{
        menu: (base, props) => ({
          ...base,
          my: 1,
          borderTopEndRadius: 0,
          shadow: 'md'
        }),
        menuList: (base, props) => ({
          ...base,
          borderRadius: 'lg',
          _dark: {
            bg: 'gray.800'
          },
          _light: {
            bg: base.bg
          }
        }),
        dropdownIndicator: (base, props) => ({
          ...base,
          _dark: {
            bg: '#394457'
          }
        }),
        control: (base, props) => ({
          ...base,
          _light: lightStyles,
          _dark: darkStyles,
          borderRadius: 'md'
        }),
        placeholder: (base, props) => ({
          ...base,
          _light: { color: lightStyles._placeholder.color },
          _dark: { color: darkStyles._placeholder.color },
          borderRadius: 'md'
        }),
        option: (base, props) => ({
          ...base,
          _light: {
            bg: props.isSelected ? `${colorScheme}.100` : base.bg,
            color: props.isSelected ? `${colorScheme}.700` : base.color,
            fontWeight: props.isSelected ? 'semibold' : base.fontWeight,
            _hover: {
              bg: props.isSelected && `${colorScheme}.100`
            }
          },
          _dark: {
            bg: props.isSelected ? `${colorScheme}.800` : base.bg,
            color: props.isSelected ? `${colorScheme}.100` : base.color,
            fontWeight: props.isSelected ? 'semibold' : base.fontWeight,
            _hover: {
              bg: props.isSelected && `${colorScheme}.700`
            }
          }
        })
      }}
      {...props}
    />
  )
}

function FieldTextarea({ field, form, meta, showCount = true, max = 200, ...props }) {
  return (
    <Box>
      <Textarea
        resize='none'
        _light={lightStyles}
        _dark={darkStyles}
        {...field}
        {...props}
      />
      {showCount && (
        <Box
          display='flex'
          justifyContent='flex-end'
          fontSize='12px'
          _light={{ color: 'blackAlpha.500  ' }}
          _dark={{ color: 'whiteAlpha.600' }}
        >
          {`${field?.value?.length}/${max}`}
        </Box>
      )}
    </Box>
  )
}

function FieldCheckbox({ field, form, meta, option, ...props }) {
  return (
    <Checkbox {...field} {...props}>
      {option}
    </Checkbox>
  )
}

const lightStyles = {
  bg: 'gray.100',
  _hover: {
    bg: 'gray.200'
  },
  _placeholder: {
    color: 'gray.400'
  }
}

const darkStyles = {
  bg: 'gray.700',
  _hover: {
    bg: 'gray.700'
  },
  _placeholder: {
    color: 'gray.400'
  }
}

const specialInputType = {
  number: FieldNumber,
  select: FieldSelect,
  switch: FieldSwitch,
  textarea: FieldTextarea,
  checkbox: FieldCheckbox
}

export default FieldForm
