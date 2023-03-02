class Order {
  constructor(restaurantData, date, address, items, total, payment) {
    this.restaurantData = restaurantData
    this.date = date
    this.address = address
    this.items = items
    this.total = total
    this.payment = payment
  }
}

export default Order
