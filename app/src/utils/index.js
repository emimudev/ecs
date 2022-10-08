export function getDiscount(price, percentage) {
  return price * ((100 - percentage) / 100)
}
