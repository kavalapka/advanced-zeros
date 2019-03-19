module.exports = function getZerosCount(number, base) {

  let base_factor = {};

  for (let i = 2; i <= base; i++) {
    let count  = 0;
    while (base % i === 0) {
      base = base / i;
      count ++;
      base_factor[i] = count;
    }
  }

  let power_of_factor = [];

  for (let key in base_factor) {
    let num = number;
    let sum = 0;
    while (num) {
      num = Math.floor(num/key);
      sum += num;
    }
    power_of_factor.push(Math.floor(sum/base_factor[key]));
  }

  return Math.min(...power_of_factor);
};
