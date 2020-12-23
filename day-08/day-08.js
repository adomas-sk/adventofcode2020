const NOP = 'nop';
const ACC = 'acc';
const JMP = 'jmp';

const partOne = (bootCode) => {
  const visitedIndexes = [];

  let index = 0;
  let acc = 0;
  while (index < bootCode.length - 1) {
    if (visitedIndexes.includes(index)) {
      return acc;
    }
    visitedIndexes.push(index);
    const [operation, value] = bootCode[index].split(' ');

    if (operation === NOP) {
      index += 1;
    } else if (operation === ACC) {
      acc += parseInt(value);
      index += 1;
    } else if (operation === JMP) {
      index = index + parseInt(value);
    }
  }
  return acc;
};

const generatePossibleCodes = (bootCode) => {
  const jumps = bootCode.reduce((acc, i, index) => (i.startsWith(JMP) ? [...acc, index] : acc), []);
  const noops = bootCode.reduce((acc, i, index) => (i.startsWith(NOP) ? [...acc, index] : acc), []);

  const jumpsChangedToNoops = jumps.map((indexToChange) =>
    bootCode.map((line, index) => (indexToChange === index ? `${NOP} ${line.split(' ')[1]}` : line))
  );
  const noopsChangedTojumps = noops.map((indexToChange) =>
    bootCode.map((line, index) => (indexToChange === index ? `${JMP} ${line.split(' ')[1]}` : line))
  );
  return [...jumpsChangedToNoops, ...noopsChangedTojumps];
};

const runCode = (code) => {
  let index = 0;
  let acc = 0;

  let loops = 0;
  const maxLoops = 5000;
  while (index < code.length) {
    loops += 1;
    if (loops > maxLoops) {
      return false;
    }

    const [operation, value] = code[index].split(' ');

    if (operation === NOP) {
      index += 1;
    } else if (operation === ACC) {
      acc += parseInt(value);
      index += 1;
    } else if (operation === JMP) {
      index = index + parseInt(value);
    }
  }
  return acc;
};

const partTwo = (bootCode) => {
  const possibleCodeChanges = generatePossibleCodes(bootCode);
  const correctCode = possibleCodeChanges.find(runCode);

  return runCode(correctCode);
};

module.exports = {
  partOne,
  partTwo,
};
