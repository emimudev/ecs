import { PricingInfo } from 'pages/PublishCarPage/Pricing'
import { toBase64 } from 'utils'

async function parseValues({ files, ...values }) {
  const filesTransformed = await getFiles(files)
  return ({
    seller: {
      name: values.sellerName,
      email: values.sellerEmail,
      mainPhone: values.sellerPrimaryPhone,
      secondaryPhone: values.sellerSecondaryPhone,
      whatsApp: values.sellerWhatsAppPhone
    },
    car: {
      brand: values.brand,
      model: values.model,
      style: values.style,
      year: values.year,
      status: values.status,
      price: values.price,
      isNP: values.isNP,
      outsideColor: values.outsideColor,
      insideColor: values.insideColor,
      mileage: values.mileage,
      hasAlreadyPaidTaxes: values.hasAlreadyPaidTaxes,
      receiveVehicle: values.receiveVehicle,
      licensePlate: values.licensePlate,
      doorsNumber: values.doorsNumber,
      equipment: values.equipment
    },
    province: values.province,
    pricing: values.adPricing,
    discountPercentage: values.discountPercentage,
    duration: PricingInfo[values.adPricing].adMaxDuration,
    maxFiles: PricingInfo[values.adPricing].adMaxFiles,
    files: filesTransformed
  })
}

const getFiles = async (files) => {
  const promises = files.map(file => toBase64(file))
  return Promise.all(promises)
}

export default parseValues
