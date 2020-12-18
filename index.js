const fs = require("fs");

const reportRepairOne = require("./day-01/01-report-repair");
const reportRepairTwo = require("./day-01/02-report-repair");
const passwordPhilosophyOne = require("./day-02/03-password-philosophy");
const passwordPhilosophyTwo = require("./day-02/04-password-philosophy");
const tobogganTrajecoryOne = require("./day-03/05-toboggan-trajectory.js");
const tobogganTrajecoryTwo = require("./day-03/06-toboggan-trajectory.js");
const passportProcessingOne = require("./day-04/07-passport-processing.js");
const passportProcessingTwo = require("./day-04/08-passport-processing.js");
const binaryBoardingOne = require("./day-05/09-binary-boarding.js");
const binaryBoardingTwo = require("./day-05/10-binary-boarding.js");
const customCustomsOne = require("./day-06/11-custom-customs.js");
const customCustomsTwo = require("./day-06/12-custom-customs.js");
const handyHaversacksOne = require("./day-07/13-handy-haversacks.js");
const handyHaversacksTwo = require("./day-07/14-handy-haversacks.js");

const getInput = (filelocation) => {
  const input = fs.readFileSync(filelocation);
  return input.toString();
};

const getInputSplitByLines = (filelocation) => getInput(filelocation).split('\n');
const getInputSplitByBlankLines = (filelocation) => getInput(filelocation).split('\n\n');

const runTasks = () => {
  [
    {
      day: 1,
      task: 1,
      answer: reportRepairOne(
        getInputSplitByLines("day-01/input.txt").map((i) => parseInt(i))
      ),
    },
    {
      day: 1,
      task: 2,
      answer: reportRepairTwo(
        getInputSplitByLines("day-01/input.txt").map((i) => parseInt(i))
      ),
    },
    {
      day: 2,
      task: 1,
      answer: passwordPhilosophyOne(getInputSplitByLines("day-02/input.txt")),
    },
    {
      day: 2,
      task: 2,
      answer: passwordPhilosophyTwo(getInputSplitByLines("day-02/input.txt")),
    },
    {
      day: 3,
      task: 1,
      answer: tobogganTrajecoryOne(getInputSplitByLines("day-03/input.txt")),
    },
    {
      day: 3,
      task: 2,
      answer: tobogganTrajecoryTwo(getInputSplitByLines("day-03/input.txt")),
    },
    {
      day: 4,
      task: 1,
      answer: passportProcessingOne(getInputSplitByBlankLines("day-04/input.txt")),
    },
    {
      day: 4,
      task: 2,
      answer: passportProcessingTwo(getInputSplitByBlankLines("day-04/input.txt")),
    },
    {
      day: 5,
      task: 1,
      answer: binaryBoardingOne(getInputSplitByLines("day-05/input.txt")),
    },
    {
      day: 5,
      task: 2,
      answer: binaryBoardingTwo(getInputSplitByLines("day-05/input.txt")),
    },
    {
      day: 6,
      task: 1,
      answer: customCustomsOne(getInputSplitByBlankLines("day-06/input.txt")),
    },
    {
      day: 6,
      task: 2,
      answer: customCustomsTwo(getInputSplitByBlankLines("day-06/input.txt")),
    },
    {
      day: 7,
      task: 1,
      answer: handyHaversacksOne(getInputSplitByLines("day-07/input.txt")),
    },
    {
      day: 7,
      task: 2,
      answer: handyHaversacksTwo(getInputSplitByLines("day-07/input.txt")),
    },
  ].forEach((i) =>
    console.log(`Answer for day ${i.day} task ${i.task} is ${i.answer}`)
  );
};

runTasks();
