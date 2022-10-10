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
