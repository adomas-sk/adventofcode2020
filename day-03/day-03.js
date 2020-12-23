const STEPS_DOWN = 1;
const STEPS_RIGHT = 3;

const partOne = (aMap) => {
  const maxRight = aMap[0].length - 1;

  let col = 0;
  let row = 0;

  let hits = 0;

  while (row < aMap.length) {
    if (aMap[row][col] === "#") {
      hits += 1;
    }
    row += STEPS_DOWN;
    col += STEPS_RIGHT;
    if (col > maxRight) {
      col -= maxRight + 1;
    }
  }
  return hits;
};

const checkSlopes = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 },
];

const checkSlope = (stepsDown, stepsRight, aMap) => {
  const maxRight = aMap[0].length - 1;

  let col = 0;
  let row = 0;

  let hits = 0;

  while (row < aMap.length) {
    if (aMap[row][col] === "#") {
      hits += 1;
    }
    row += stepsDown;
    col += stepsRight;
    if (col > maxRight) {
      col -= maxRight + 1;
    }
  }
  return hits;
};

const partTwo = (aMap) =>
  checkSlopes.reduce(
    (acc, slope) => acc * checkSlope(slope.down, slope.right, aMap),
    1
  );

module.exports = {
  partOne,
  partTwo,
};
