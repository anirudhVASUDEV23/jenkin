import { add } from "./add";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds 2 + 2 to equal 4", () => {
  expect(add(2, 2)).toBe(4);
});

test("adds 3 + 2 to equal 5", () => {
  expect(add(3, 2)).toBe(5);
});
