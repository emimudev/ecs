import { Alert, AlertIcon, Flex } from '@chakra-ui/react'
import DefaultPricing from 'components/DefaultPricing'
import { useFormikContext } from 'formik'

function Pricing({ onChange }) {
  const formik = useFormikContext()
  const handleChange = ({ id }) => {
    onChange?.(id)
    formik.setFieldValue('adPricing', id)
  }

  return (
    <Flex direction='column' gap={3}>
      {formik.touched.adPricing && formik.errors.adPricing && (
        <Alert status='error' borderRadius='md'>
          <AlertIcon />
          {formik.errors.adPricing}
        </Alert>
      )}
      <DefaultPricing onChange={handleChange} />
    </Flex>
  )
}

export const PricingInfo = {
  1: {
    adMaxDuration: 30,
    adMaxFiles: 5
  },
  2: {
    adMaxDuration: 45,
    adMaxFiles: 10
  },
  3: {
    adMaxDuration: 60,
    adMaxFiles: 20
  }
}

export default Pricing
