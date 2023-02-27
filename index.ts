export default function ChiffreRomain(n: number) {
  let result: string = "";
  //   while (n > 0) {
  //     if (n < 4) {
  //       result += "I";
  //     }
  //     if (n === 4) {
  //       result = "IV";
  //     }
  //     if (n < 9) {
  //       result == "V" + "I" * ;
  //     }
  // 	n--
  //   }
  while (n >= 50) {
    n -= 50;
    result += "L";
  }
  while (n >= 10) {
    n -= 10;
    result += "X";
  }
  while (n === 9) {
    n -= 9;
    result += "IX";
  }
  while (n >= 5) {
    n -= 5;
    result += "V";
  }
  while (n === 4) {
    n -= 4;
    result += "IV";
  }

  while (n > 0) {
    n--;
    result += "I";
  }

  return result;
}
