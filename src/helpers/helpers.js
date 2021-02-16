export const numbers = [...Array(10).keys()].reverse().map(item => `${item}`);
numbers.push('.');

const functions = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
  '%': (x, y) => x * y / 100
};

export const choosingAction = (func, first, second) => {
  const value = functions[func](first, second);
  return value;
};
