const mockPaymentService = require('./IPaymentService')
jest.mock('./IPaymentService', () => ({
  charge: jest.fn()
}))
const mockCartService = require('./ICartService')
jest.mock('./ICartService', () => ({
  total: jest.fn(),
  items: jest.fn()
}))
const mockShipmentService = require('./IShipmentService')
jest.mock('./IShipmentService', () => ({
  ship: jest.fn()
}))
const cardMock = jest.mock('./ICard');
const addressInfoMock = jest.mock('./IAddressInfo');

const controller = new (require('./CartController'))(mockPaymentService, mockCartService, mockShipmentService)

afterEach(() => {
  jest.clearAllMocks();
});

describe("Check CartController - Checkout method ", () => {
  test.skip('if payment OK then should ship and return charged', async () => {
    // Arrange

	// Act

	//Assert

  });

  test.skip('if payment KO then should not ship and return not charged', async () => {
    // Arrange

	// Act

	//Assert

  });
});
