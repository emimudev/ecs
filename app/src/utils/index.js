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
