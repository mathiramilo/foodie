class Order {
  constructor(userId, restaurantData, items, total, address, payment) {
    this.userId = userId
    this.restaurantData = restaurantData
    this.date = new Date().toString()
    this.items = items
    this.total = total
    this.address = address
    this.payment = payment
  }
}

export default Order
