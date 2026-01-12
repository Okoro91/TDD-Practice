import calculator from "./calculator.js";

test("calculator functions work correctly", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("calculator functions work correctly", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("calculator functions work correctly", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("calculator functions work correctly", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("calculator functions work correctly", () => {
  calculator.add = calculator.add(2, 3);
  calculator.subtract = calculator.subtract(5, 3);
  calculator.multiply = calculator.multiply(4, 3);
  calculator.divide = calculator.divide(10, 2);
  expect(calculator).toEqual({
    add: 5,
    subtract: 2,
    multiply: 12,
    divide: 5,
  });
});
