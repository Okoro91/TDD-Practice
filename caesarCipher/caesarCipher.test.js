import caesarCipher from "./caesarCipher.js";

test("caesarCipher works correctly", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("caesarCipher works correctly", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher works correctly", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("caesarCipher works correctly", () => {
  expect(caesarCipher("ABC", 1)).toBe("BCD");
  expect(caesarCipher("XYZ", 2)).toBe("ZAB");
});

test("caesarCipher works correctly", () => {
  expect(caesarCipher("Caesar Cipher!", 4)).toBe("Geiwev Gmtliv!");
});
