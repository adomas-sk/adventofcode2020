const main = (groupAnswers) => {
  const answersCounts = groupAnswers.map((group) => {
    const questionsAnsweredByGroup = {};
    const people = group.split("\n");
    people.forEach((person) => {
      const answers = person.split("");
      answers.forEach((answer) => {
        questionsAnsweredByGroup[answer] = true;
      });
    });
    return Object.keys(questionsAnsweredByGroup).length;
  });
  return answersCounts.reduce((acc, count) => acc + count, 0);
};

module.exports = main;
