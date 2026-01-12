import capitalize from "./capitalize.js";

test("capitalize function capitalizes the first letter of a string", () => {
  expect(capitalize("salam")).toBe("Salam");
  expect(capitalize("muhammed")).toBe("Muhammed");
  expect(capitalize("okoro")).toBe("Okoro");
});
