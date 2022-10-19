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
