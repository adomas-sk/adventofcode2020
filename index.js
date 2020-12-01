const fs = require("fs");

const reportRepairOne = require("./day-01/01-report-repair");
const reportRepairTwo = require("./day-01/02-report-repair");

const getInput = (filelocation) => {
  const input = fs.readFileSync(filelocation);
  return input
    .toString()
    .split("\n")
    .map((i) => parseInt(i));
};

const runTasks = () => {
  [
    reportRepairOne(getInput("day-01/input.txt")),
    reportRepairTwo(getInput("day-01/input.txt")),
  ].forEach((i) => console.log(i));
};

runTasks();
