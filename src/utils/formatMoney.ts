export const FormatMoney = money => {
  return money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
};
