const PREAMBLE = 25;

const findSumInList = (list, result) => list.find((x) => list.find((y) => x !== y && x + y === result));

const partOne = (input) => {
  const parsedInput = input.map((i) => parseInt(i, 10));
  const preample = parsedInput.slice(0, PREAMBLE);
  const postamble = parsedInput.slice(PREAMBLE);

  let possibleNumbers = [...preample];
  const invalidNumber = postamble.find((number) => {
    if (findSumInList(possibleNumbers, number)) {
      possibleNumbers = [...possibleNumbers.slice(1), number];
      return false;
    }
    return true;
  });

  return invalidNumber;
};

const partTwo = (input) => {
  const parsedInput = input.map((i) => parseInt(i, 10));
  const invalidNumber = partOne(input);

  let answer = 0;
  parsedInput.map((firstNumber, start) => {
    if (answer) return;
    let sum = firstNumber;
    parsedInput.slice(start + 1).map((nextNumber, finish) => {
      sum += nextNumber;
      if (sum === invalidNumber) {
        const itemsToAdd = parsedInput.slice(start, finish + start);
        answer = Math.max(...itemsToAdd) + Math.min(...itemsToAdd);
      }
    });
  });
  return answer;
};

module.exports = {
  partOne,
  partTwo,
};
