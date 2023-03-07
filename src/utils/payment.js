export const showCardNumberLastDigits = cardNumber => {
  const lastFourDigits = cardNumber.slice(-4)
  return `•••• •••• •••• ${lastFourDigits}`
}

export const isVisa = cardNumber => {
  const visaArr = ['0', '1', '2', '3', '4']
  return visaArr.includes(cardNumber[0])
}

export const formatCardNumber = cardNumber => {
  const cardNumberArr = cardNumber.split(' ')
  const cardNumberStr = cardNumberArr.join('')
  const firstFourDigits = cardNumberStr.slice(0, 4)
  const secondFourDigits = cardNumberStr.slice(4, 8)
  const thirdFourDigits = cardNumberStr.slice(8, 12)
  const fourthFourDigits = cardNumberStr.slice(12, 16)
  return `${firstFourDigits} ${secondFourDigits} ${thirdFourDigits} ${fourthFourDigits}`
}
