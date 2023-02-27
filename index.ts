export default function ChiffreRomain(n: number) {
  let result: string = "";

  while (n >= 50) {
    n -= 50;
    result += "L";
  }
  while (n >= 10) {
    n -= 10;
    result += "X";
  }
  if (n === 9) {
    n -= 9;
    result += "IX";
  }
  if (n >= 5) {
    n -= 5;
    result += "V";
  }
  if (n === 4) {
    n -= 4;
    result += "IV";
  }

  while (n > 0) {
    n--;
    result += "I";
  }

  return result;
}
