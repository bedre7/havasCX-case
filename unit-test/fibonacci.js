const fibonacci = ([start, end]) => {
  if (start < 0 || end < 0) {
    return [];
  }

  let fib = [0, 1];

  for (let i = 2; i <= end; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib.slice(start);
};

module.exports = { fibonacci };
