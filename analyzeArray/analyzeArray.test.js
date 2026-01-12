import analyzeArray from "./analyzeArray";

test("analyzeArray works correctly", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("analyzeArray works correctly", () => {
  expect(analyzeArray([-10, 0, 10, 20])).toEqual({
    average: 5,
    min: -10,
    max: 20,
    length: 4,
  });
});

test("analyzeArray works correctly", () => {
  expect(analyzeArray([42])).toEqual({
    average: 42,
    min: 42,
    max: 42,
    length: 1,
  });
});

test("analyzeArray works correctly", () => {
  expect(analyzeArray([3, 7, 2, 9, 4])).toEqual({
    average: 5,
    min: 2,
    max: 9,
    length: 5,
  });
});

test("analyzeArray works correctly", () => {
  expect(analyzeArray([0, 0, 0, 0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 4,
  });
});
