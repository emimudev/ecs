import { useMutation } from '@tanstack/react-query'
import { PricingInfo } from 'pages/PublishCarPage/Pricing'
import { useContext, createContext } from 'react'
import carAdsAPI from 'services/carAdsAPI'

const PublishCarContext = createContext()

function PublishCarContextProvider({ children }) {
  const mutation = useMutation(carAdsAPI.create)
  const handleSubmit = (values, event) => {
    const { files, ...adValues } = values
    const adInfo = {
      seller: {
        name: adValues.sellerName,
        email: adValues.sellerEmail,
        mainPhone: adValues.sellerPrimaryPhone,
        secondaryPhone: adValues.sellerSecondaryPhone,
        whatsApp: adValues.sellerWhatsAppPhone
      },
      car: {
        brand: adValues.brand,
        model: adValues.model,
        style: adValues.style,
        year: adValues.year,
        status: adValues.status,
        price: adValues.price,
        isNP: adValues.isNP,
        outsideColor: adValues.outsideColor,
        insideColor: adValues.insideColor,
        mileage: adValues.mileage,
        hasAlreadyPaidTaxes: adValues.hasAlreadyPaidTaxes,
        receiveVehicle: adValues.receiveVehicle,
        licensePlate: adValues.licensePlate,
        doorsNumber: adValues.doorsNumber,
        equipment: adValues.equipment
      },
      province: adValues.province,
      pricing: adValues.adPricing,
      discountPercentage: 0,
      duration: PricingInfo[adValues.adPricing].adMaxDuration,
      maxFiles: PricingInfo[adValues.adPricing].adMaxFiles,
      files: []
    }
    console.log({ Datos: adInfo })
    mutation.mutate(adInfo)
  }

  return (
    <PublishCarContext.Provider value={{ handleSubmit, mutation }}>
      {children}
    </PublishCarContext.Provider>
  )
}

export const usePublishContext = () => useContext(PublishCarContext)
export default PublishCarContextProvider
