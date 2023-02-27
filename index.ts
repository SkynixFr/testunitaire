export default function ChiffreRomain(n: number) {
  let result: string = "";

  while (n >= 1000) {
    n -= 1000;
    result += "M";
  }
  if (n >= 900) {
    n -= 900;
    result += "CM";
  }
  if (n >= 500) {
    n -= 500;
    result += "D";
  }
  while (n >= 100) {
    n -= 100;
    result += "C";
  }
  if (n >= 90) {
    n -= 90;
    result += "XC";
  }
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
