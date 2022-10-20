import DefaultPricing from 'components/DefaultPricing'
import { useFormikContext } from 'formik'

function Pricing() {
  const formik = useFormikContext()
  const handleChange = ({ id }) => {
    formik.setFieldValue('adPricing', id)
  }
  return (
    <DefaultPricing onChange={handleChange} />
  )
}

export default Pricing
