const partOne = (passwordList) => {
  return passwordList.reduce((acc, line) => {
    const [fromTo, _letter, password] = line.split(' ');
    const [minAmount, maxAmount] = fromTo.split('-');
    const letter = _letter[0];

    const countOfLetter = (password.match(new RegExp(letter, 'g')) || []).length;
    if (countOfLetter >= parseInt(minAmount) && countOfLetter <= parseInt(maxAmount)) {
      acc += 1;
    }
    return acc;
  }, 0);
};

const partTwo = (passwordList) => {
  return passwordList.reduce((acc, line) => {
    const [positions, _letter, password] = line.split(' ');
    const [firstPosition, secondPosition] = positions.split('-');
    const letter = _letter[0];

    const letterAtFirstPosition = password[parseInt(firstPosition) - 1];
    const letterAtSecondPosition = password[parseInt(secondPosition) - 1];

    const letterCountInPositions = [letterAtFirstPosition, letterAtSecondPosition].reduce(
      (acc, letterAtPosition) => (letterAtPosition === letter ? acc + 1 : acc),
      0
    );

    if (letterCountInPositions === 1) {
      acc += 1;
    }
    return acc;
  }, 0);
};

module.exports = {
  partOne,
  partTwo,
};
