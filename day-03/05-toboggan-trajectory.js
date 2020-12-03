const STEPS_DOWN = 1;
const STEPS_RIGHT = 3;

const main = (aMap) => {
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

module.exports = main;
