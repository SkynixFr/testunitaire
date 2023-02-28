class CartController {
  constructor(paymentService, cartService, shipmentService) {
    this.paymentService = paymentService
    this.cartService = cartService
    this.shipmentService = shipmentService
  }

  checkOut(card, addressInfo) {
    var result = this.paymentService.charge(this.cartService.total(), card)
    if (result) {
      this.shipmentService.ship(addressInfo, this.cartService.items())
      return 'charged'
    } else {
      return 'not charged'
    }
  }
}

module.exports = CartController
