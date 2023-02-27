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
  test("Chiffre Romain 99 = XVIII", () => {
    expect(ChiffreRomain(18)).toBe("XVIII");
  });
  test("Chiffre Romain 88 = LXXXVIII", () => {
    expect(ChiffreRomain(88)).toBe("LXXXVIII");
  });
});
