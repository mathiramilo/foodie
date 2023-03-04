class Order {
  constructor(restaurantData, address, items, total, payment) {
    this.restaurantData = restaurantData
    this.date = new Date()
    this.address = address
    this.items = items
    this.total = total
    this.payment = payment
  }
}

export default Order
