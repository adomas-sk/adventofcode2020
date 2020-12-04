const fs = require("fs");

const reportRepairOne = require("./day-01/01-report-repair");
const reportRepairTwo = require("./day-01/02-report-repair");
const passwordPhilosophyOne = require("./day-02/03-password-philosophy");
const passwordPhilosophyTwo = require("./day-02/04-password-philosophy");
const tobogganTrajecoryOne = require("./day-03/05-toboggan-trajectory.js");
const tobogganTrajecoryTwo = require("./day-03/06-toboggan-trajectory.js");
const passportProcessingOne = require("./day-04/07-passport-processing.js");
const passportProcessingTwo = require("./day-04/08-passport-processing.js");

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
  ].forEach((i) =>
    console.log(`Answer for day ${i.day} task ${i.task} is ${i.answer}`)
  );
};

runTasks();
