function getPrice(tariff, duration) {
  let lowestFee = Infinity

  for (key in tariff) {
    const minimum_duration = Math.ceil(duration / key)
    const fee = tariff[key] * minimum_duration
    
    if (fee < lowestFee) {
      lowestFee = fee
    }
  }

  return lowestFee;
}

module.exports = getPrice;