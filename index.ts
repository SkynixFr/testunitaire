export default function ChiffreRomain(n: number) {
  let result: string = "";
  let number = [1000];
  let key = ["M"];
  for (let i = 0; i < number.length; i++) {
    const elemetKey = key[i];
    const element = number[i];
    while (n >= element) {
      n -= element;
      result += elemetKey;
    }
  }

  while (n >= 900) {
    n -= 900;
    result += "CM";
  }
  while (n >= 500) {
    n -= 500;
    result += "D";
  }
  while (n >= 100) {
    n -= 100;
    result += "C";
  }
  while (n >= 90) {
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
  while (n >= 9) {
    n -= 9;
    result += "IX";
  }
  while (n >= 5) {
    n -= 5;
    result += "V";
  }
  while (n >= 4) {
    n -= 4;
    result += "IV";
  }

  while (n > 0) {
    n--;
    result += "I";
  }

  return result;
}
