export function getDiscount(price, percentage) {
  return price * ((100 - percentage) / 100)
}

export function getCurrentTheme() {
  const savedTheme = window.localStorage.getItem('chakra-ui-color-mode')

  return {
    isDark: savedTheme === 'dark',
    isLight: savedTheme === 'light'
  }
}

export const SelectProvinces = [
  { label: 'San José', value: 'San José' },
  { label: 'Heredia', value: 'Heredia' },
  { label: 'Cartago', value: 'Cartago' },
  { label: 'Alajuela', value: 'Alajuela' },
  { label: 'Puntarenas', value: 'Puntarenas' },
  { label: 'Limón', value: 'Limón' },
  { label: 'Guanacaste', value: 'Guanacaste' }
]
export const CarsStyles = [
  { label: 'Sedán', value: 'Sedán' },
  { label: 'Station Wagon', value: 'Station Wagon' },
  { label: 'Hatchback', value: 'Hatchback' },
  { label: 'Pick Up 4x2', value: 'Pick Up 4x2' },
  { label: 'Pick Up 4x4', value: 'Pick Up 4x4' },
  { label: 'Microbus', value: 'Microbus' }
]

export const MotorcycleStyles = [
  { label: 'Doble Propósito', value: 'Doble Propósito' },
  { label: 'Enduro', value: 'Enduro' },
  { label: 'Sport', value: 'Sport' },
  { label: 'Supermoto', value: 'Supermoto' },
  { label: 'Trabajo', value: 'Trabajo' },
  { label: 'Scooters', value: 'Scooters' },
  { label: 'Kids', value: 'Kids' }
]
export function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export function previewFile({ file }) {
  const preview = document.querySelector('img')
  const reader = new FileReader()

  reader.addEventListener('load', () => {
    // convert image file to base64 string
    preview.src = reader.result
  }, false)

  if (file) {
    reader.readAsDataURL(file)
  }
}

export function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

export const getFormData = obj => Object.keys(obj).reduce((fd, key) => {
  fd.append(key, obj[key])
  return fd
}, new FormData())

export const getCloudinaryImage = ({ publicId, w = '600' }) => (
  `https://res.cloudinary.com/dvpbdhkn0/image/upload/c_thumb,w_${w},g_face/v1667192451/${publicId}.webp`
)
