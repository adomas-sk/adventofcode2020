const partOne = (groupAnswers) => {
  const answersCounts = groupAnswers.map((group) => {
    const questionsAnsweredByGroup = {};
    const people = group.split('\n');
    people.forEach((person) => {
      const answers = person.split('');
      answers.forEach((answer) => {
        questionsAnsweredByGroup[answer] = true;
      });
    });
    return Object.keys(questionsAnsweredByGroup).length;
  });
  return answersCounts.reduce((acc, count) => acc + count, 0);
};

const partTwo = (groupAnswers) => {
  const answersCounts = groupAnswers.map((group) => {
    const questionsAnsweredByGroup = {};
    const people = group.split('\n');
    people.forEach((person) => {
      const answers = person.split('');
      answers.forEach((answer) => {
        if (questionsAnsweredByGroup[answer]) {
          questionsAnsweredByGroup[answer] += 1;
          return;
        }
        questionsAnsweredByGroup[answer] = 1;
      });
    });
    const thing = Object.keys(questionsAnsweredByGroup).reduce((acc, val) => {
      if (questionsAnsweredByGroup[val] === people.length) {
        return { ...acc, [val]: true };
      }
      return acc;
    }, {});
    return Object.keys(thing).length;
  });
  return answersCounts.reduce((acc, count) => acc + count, 0);
};

module.exports = {
  partOne,
  partTwo,
};
