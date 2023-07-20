const generateSequence = (length) => {
  const sequence = [];
  let currentNumber = 1;

  for (let i = 0; i < length; i++) {
    sequence.push(currentNumber);
    currentNumber += i + 1;
  }

  return sequence.join("-");
};

const length = 7;
const result = generateSequence(length);

console.log(result);
