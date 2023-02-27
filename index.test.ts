import { describe, expect, test } from "@jest/globals";
import ChiffreRomain from "./index";
describe("Chiffre Romain", () => {
  test("Chiffre Romain 1 = I", () => {
    expect(ChiffreRomain(1)).toBe("I");
  });
  test("Chiffre Romain 3 = III", () => {
    expect(ChiffreRomain(3)).toBe("III");
  });
  test("Chiffre Romain 4 = IV", () => {
    expect(ChiffreRomain(4)).toBe("IV");
  });
  test("Chiffre Romain 5 = V", () => {
    expect(ChiffreRomain(5)).toBe("V");
  });
  test("Chiffre Romain 8 = VIII", () => {
    expect(ChiffreRomain(8)).toBe("VIII");
  });
  test("Chiffre Romain 9 = IX", () => {
    expect(ChiffreRomain(9)).toBe("IX");
  });
  test("Chiffre Romain 10 = X", () => {
    expect(ChiffreRomain(10)).toBe("X");
  });
  test("Chiffre Romain 18 = XVIII", () => {
    expect(ChiffreRomain(18)).toBe("XVIII");
  });
  test("Chiffre Romain 50 = L", () => {
    expect(ChiffreRomain(50)).toBe("L");
  });
  test("Chiffre Romain 88 = LXXXVIII", () => {
    expect(ChiffreRomain(88)).toBe("LXXXVIII");
  });
  test("Chiffre Romain 90 = XC", () => {
    expect(ChiffreRomain(90)).toBe("XC");
  });
  test("Chiffre Romain 100 = C", () => {
    expect(ChiffreRomain(100)).toBe("C");
  });
  test("Chiffre Romain 200 = CC", () => {
    expect(ChiffreRomain(200)).toBe("CC");
  });
  test("Chiffre Romain 500 = D", () => {
    expect(ChiffreRomain(500)).toBe("D");
  });
  test("Chiffre Romain 900 = CM", () => {
    expect(ChiffreRomain(900)).toBe("CM");
  });
  test("Chiffre Romain 1000 = M", () => {
    expect(ChiffreRomain(1000)).toBe("M");
  });
  test("Chiffre Romain 2000 = MM", () => {
    expect(ChiffreRomain(2000)).toBe("MM");
  });
  test("Chiffre Romain 3999 = MMMCMXCIX", () => {
    expect(ChiffreRomain(3999)).toBe("MMMCMXCIX");
  });
});
