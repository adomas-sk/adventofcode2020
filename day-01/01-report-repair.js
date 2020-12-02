const RESULTING_AMOUNT = 2020;

const mainButBetter = (expenseReport) => {
  const reportMap = expenseReport.reduce((acc, val) => {
    acc[val] = true;
    return acc;
  }, {});
  const secondNumber = expenseReport.find(
    (item) => reportMap[RESULTING_AMOUNT - item]
  );

  return (RESULTING_AMOUNT - secondNumber) * secondNumber;
}

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
