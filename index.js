const fs = require("fs");

const reportRepairOne = require("./day-01/01-report-repair");
const reportRepairTwo = require("./day-01/02-report-repair");
const passwordPhilosophyOne = require("./day-02/03-password-philosophy");
const passwordPhilosophyTwo = require("./day-02/04-password-philosophy");

const getInput = (filelocation) => {
  const input = fs.readFileSync(filelocation);
  return input.toString().split("\n");
};

const runTasks = () => {
  [
    {day: 1, task: 1, answer: reportRepairOne(getInput("day-01/input.txt").map((i) => parseInt(i)))},
    {day: 1, task: 2, answer: reportRepairTwo(getInput("day-01/input.txt").map((i) => parseInt(i)))},
    {day: 2, task: 1, answer: passwordPhilosophyOne(getInput("day-02/input.txt"))},
    {day: 2, task: 2, answer: passwordPhilosophyTwo(getInput("day-02/input.txt"))},
  ].forEach((i) => console.log(`Answer for day ${i.day} task ${i.task} is ${i.answer}`));
};

runTasks();
