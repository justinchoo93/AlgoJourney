const romanToInt = (s) => {
  // input: String, output: Number
  // object with key value pair as symbol and value, respectively
  // declare output variable sum
  // edge case: subtraction
  // think about cases where I is first character and V or X is second character
  // think about cases where X is first character and L or C is second character
  // think about cases where C is first character and D or M is second character
  // iterate through the string and add each corresponding value to the sum

  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let currentValue = map[s[i]];
    if (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
      currentValue = map[s[i + 1]] - currentValue;
      sum += currentValue;
      i++;
    } else if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
      currentValue = map[s[i + 1]] - currentValue;
      sum += currentValue;
      i++;
    } else if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
      currentValue = map[s[i + 1]] - currentValue;
      sum += currentValue;
      i++;
    } else {
      sum += currentValue;
    }
  }
  return sum;
};

const input1 = 'III';
console.log(romanToInt(input1));

const input2 = 'IV';
console.log(romanToInt(input2));

const input3 = 'IX';
console.log(romanToInt(input3));

const input4 = 'LVIII';
console.log(romanToInt(input4));

const input5 = 'MCMXCIV';
console.log(romanToInt(input5));
