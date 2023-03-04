export const showCardNumberLastDigits = cardNumber => {
  const lastFourDigits = cardNumber.slice(-4)
  return `•••• •••• •••• ${lastFourDigits}`
}

export const isVisa = cardNumber => {
  const visaArr = ['0', '1', '2', '3', '4']
  return visaArr.includes(cardNumber[0])
}
