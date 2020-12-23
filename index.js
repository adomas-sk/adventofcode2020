const fs = require('fs');

const dayOne = require('./day-01/day-01');
const dayTwo = require('./day-02/day-02');
const dayThree = require('./day-03/day-03');
const dayFour = require('./day-04/day-04');
const dayFive = require('./day-05/day-05');
const daySix = require('./day-06/day-06');
const daySeven = require('./day-07/day-07');
const dayEight = require('./day-08/day-08');
const dayNine = require('./day-09/day-09');
const dayTen = require('./day-10/day-10');

const getInput = (filelocation) => {
  const input = fs.readFileSync(filelocation);
  return input.toString();
};

const getInputSplitByLines = (filelocation) => getInput(filelocation).split('\n');
const getInputSplitByBlankLines = (filelocation) => getInput(filelocation).split('\n\n');

const runTasks = () => {
  [
    // { day: dayOne, input: getInputSplitByLines('day-01/input.txt').map((i) => parseInt(i)) },
    // { day: dayTwo, input: getInputSplitByLines('day-02/input.txt') },
    // { day: dayThree, input: getInputSplitByLines('day-03/input.txt') },
    // { day: dayFour, input: getInputSplitByBlankLines('day-04/input.txt') },
    // { day: dayFive, input: getInputSplitByLines('day-05/input.txt') },
    // { day: daySix, input: getInputSplitByBlankLines('day-06/input.txt') },
    // { day: daySeven, input: getInputSplitByLines('day-07/input.txt') },
    // { day: dayEight, input: getInputSplitByLines('day-08/input.txt') },
    // { day: dayNine, input: getInputSplitByLines('day-09/input.txt') },
    { day: dayTen, input: getInputSplitByLines('day-10/input.txt') },
  ].forEach((item, index) => {
    console.log(`Answer for day ${index + 1} task 1 is ${item.day.partOne(item.input)}`);
    console.log(`Answer for day ${index + 1} task 2 is ${item.day.partTwo(item.input)}`);
  });
};

runTasks();
