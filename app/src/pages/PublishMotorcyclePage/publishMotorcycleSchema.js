import * as Yup from 'yup'

export const InitialValues = {
  sellerName: '',
  sellerEmail: '',
  sellerPrimaryPhone: '',
  sellerSecondaryPhone: '',
  sellerWhatsAppPhone: '',
  brand: '',
  model: '',
  style: '',
  year: '',
  status: '',
  price: '',
  isNP: false,
  outsideColor: '',
  mileage: '',
  hasAlreadyPaidTaxes: false,
  receiveVehicle: false,
  licensePlate: '',
  province: '',
  extraComment: '',
  adPricing: 0,
  discountPercentage: 0,
  equipment: [],
  files: []
}

const defaultRequiredMessage = 'Este campo es requerido'

const publishMotorcycleSchema = Yup.object({
  sellerName: Yup
    .string()
    .required(defaultRequiredMessage),
  sellerEmail: Yup
    .string()
    .email('Debe ser un email válido')
    .required(defaultRequiredMessage),
  sellerPrimaryPhone: Yup
    .number()
    .required(defaultRequiredMessage),
  sellerWhatsAppPhone: Yup
    .number()
    .required(defaultRequiredMessage),
  brand: Yup
    .string()
    .required(defaultRequiredMessage),
  model: Yup
    .string()
    .required(defaultRequiredMessage),
  style: Yup
    .string()
    .required(defaultRequiredMessage),
  year: Yup
    .number()
    .required(defaultRequiredMessage),
  status: Yup
    .string()
    .required(defaultRequiredMessage),
  price: Yup
    .number()
    .required(defaultRequiredMessage),
  isNP: Yup
    .boolean()
    .required(defaultRequiredMessage),
  outsideColor: Yup
    .string()
    .required(defaultRequiredMessage),
  mileage: Yup
    .number()
    .required(defaultRequiredMessage),
  hasAlreadyPaidTaxes: Yup
    .boolean()
    .required(defaultRequiredMessage),
  receiveVehicle: Yup
    .boolean()
    .required(defaultRequiredMessage),
  province: Yup
    .string()
    .required(defaultRequiredMessage),
  extraComment: Yup
    .string()
    .required(defaultRequiredMessage),
  adPricing: Yup
    .number()
    .min(1, 'Debe seleccionar un plan antes de publicar el anuncio')
    .max(3)
    .required(defaultRequiredMessage),
  discountPercentage: Yup
    .number()
    .min(0, 'El descuento mínimo es 0')
    .max(100, 'El descuento máximo es 100'),
  files: Yup
    .array()
    .min(1, 'Debe publicar al menos una foto')
    .required(defaultRequiredMessage)
})

export default publishMotorcycleSchema
