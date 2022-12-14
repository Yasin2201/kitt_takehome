const getPrice = require('./getPrice');

describe("getPrice function", () => {
  const tariff = {
    1: 2,
    60: 22,
    1440: 60,
    10080: 105
  } // duration (mins) : price (£)

  test("0 mins to return 0", () => {
      expect(getPrice(tariff, 0)).toEqual(0)
  });

  test("1440 mins return price per day", () => {
    expect(getPrice(tariff, 1440)).toEqual(60)
  });

  test("2880 mins return cheapest price for two days", () => {
      expect(getPrice(tariff, 2880)).toEqual(105)
  });

  test("20160 mins return price for two weeks", () => {
      expect(getPrice(tariff, 20160)).toEqual(210)
  });
});