const { sumTwoValue } = require("./utils");

test("should requrn sum of two variable", () => {
  expect(sumTwoValue(1, 2)).not.toBe(3);
});
