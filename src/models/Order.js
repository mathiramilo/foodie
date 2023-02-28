class Order {
  constructor(restaurantId, date, address, items, total, payment) {
    this.restaurantId = restaurantId
    this.date = date
    this.address = address
    this.items = items
    this.total = total
    this.payment = payment
  }
}

export default Order
