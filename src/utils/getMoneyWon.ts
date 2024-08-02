function getMoneyWon(number: number | undefined) {
  if (number === undefined) return undefined;
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export default getMoneyWon;
