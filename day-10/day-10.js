const partOne = (input) => {
  const parsedInput = input.map((i) => parseInt(i, 10)).sort((a, b) => a - b);

  const differences = parsedInput.reduce(
    (acc, val, index) => {
      if (index !== 0) {
        acc[val - parsedInput[index - 1]] += 1;
      }
      return acc;
    },
    { 1: 1, 2: 0, 3: 1 }
  );

  return differences[3] * differences[1];
};

const factorial = (number) => {
  if (number === 0 || number === 1) {
    return number;
  }
  return number * factorial(number - 1);
};

const partTwo = (input) => {
  const parsedInput = input.map((i) => parseInt(i, 10)).sort((a, b) => a - b);
  
  

  // let used = [];
  // return [0, ...parsedInput, Math.max(...parsedInput) + 3].reduce((acc, number, index, arr) => {
  //   if (index === arr.length - 1 || used.includes(number)) {
  //     return acc;
  //   }
  //   const foundPossibleNext = arr.filter((i) => i > number && i < number + 4);
  //   used = [...used, ...foundPossibleNext];
  //   const foundPossibleCount = foundPossibleNext.length;
  //   if (foundPossibleCount === 3) {
  //     if (arr[index + 1] + 3 === arr[index + 4]) {
  //       return acc * 7;
  //     }
  //     if (arr[index + 2] + 2 === arr[index + 4]) {
  //       return acc * 6;
  //     }
  //     return acc * 4;
  //   } else if (foundPossibleCount === 2) {
  //     if (arr[index + 1] + 3 === arr[index + 3]) {
  //       return acc * 3;
  //     }
  //     return acc * 2;
  //   }
  //   return acc * 1;
  // }, 1);
};
module.exports = {
  partOne,
  partTwo,
};
