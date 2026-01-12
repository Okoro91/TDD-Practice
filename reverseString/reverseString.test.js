import reverseString from "./reverseString.js";

test("reverseString function reverses a string", () => {
  expect(reverseString("cat")).toBe("tac");
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("testing")).toBe("gnitset");
  expect(reverseString("okoro")).toBe("oroko");
});
