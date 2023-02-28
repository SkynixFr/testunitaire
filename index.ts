export default function ChiffreRomain(n: number) {
  let result: string = "";
  let numbers = [1000, 900, 500, 100, 90, 50, 10, 9, 5, 4, 1];
  let keys = ["M", "CM", "D", "C", "XC", "L", "X", "IX", "V", "IV", "I"];
  for (let i = 0; i < numbers.length; i++) {
    const key = keys[i];
    const number = numbers[i];
    while (n >= number) {
      n -= number;
      result += key;
    }
  }
  return result;
}
