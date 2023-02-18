const { fibonacci } = require("./fibonacci");

const testCases = new Map([
  [[3, 5], [ 2, 3, 5 ]],
  [[3, 8], [ 2, 3, 5, 8, 13, 21 ]],
  [[1, 8], [ 1, 1, 2, 3, 5, 8, 13, 21 ]],
  [[4, 4], [ 3 ]],
  [[5, 2], []],
  [[-1, 2], []],
  [[1, -2], []],
  [[-1, -2], []],
]);

testCases.forEach((value, key) => {
  test(`fibonacci(${key}) = ${value}`, () => {
    expect(fibonacci(key)).toStrictEqual(value);
  });
});
