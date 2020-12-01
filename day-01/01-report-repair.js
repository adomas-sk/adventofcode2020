const RESULTING_AMOUNT = 2020;

const main = (expenseReport) => {
  const pair = expenseReport.reduce((acc, firstItem, firstIndex) => {
    if (acc.length) {
      return acc;
    }

    expenseReport.forEach((secondItem, secondIndex) => {
      if (
        !acc.length &&
        firstIndex !== secondIndex &&
        firstItem + secondItem === RESULTING_AMOUNT
      ) {
        acc.push(firstItem, secondItem);
      }
    });

    return acc;
  }, []);

  return pair[0] * pair[1];
};

module.exports = main;
