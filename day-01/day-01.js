const RESULTING_AMOUNT = 2020;

const mainButBetter = (expenseReport) => {
  const reportMap = expenseReport.reduce((acc, val) => {
    acc[val] = true;
    return acc;
  }, {});
  const secondNumber = expenseReport.find((item) => reportMap[RESULTING_AMOUNT - item]);

  return (RESULTING_AMOUNT - secondNumber) * secondNumber;
};

const partOne = (expenseReport) => {
  const pair = expenseReport.reduce((acc, firstItem, firstIndex) => {
    if (acc.length) {
      return acc;
    }

    expenseReport.forEach((secondItem, secondIndex) => {
      if (!acc.length && firstIndex !== secondIndex && firstItem + secondItem === RESULTING_AMOUNT) {
        acc.push(firstItem, secondItem);
      }
    });

    return acc;
  }, []);

  return pair[0] * pair[1];
};

const combineExistingItemsReducer = (preparsedReport) => (acc, item, index) => {
  if (acc.length > 0 && acc[acc.length - 1].sum === RESULTING_AMOUNT && acc[acc.length - 1].items.length === 3) {
    return acc;
  }
  preparsedReport.forEach((nextItem, nextIndex) => {
    if (item.indexes.includes(nextIndex)) {
      return;
    }
    if (item.sum + nextItem.sum > RESULTING_AMOUNT) {
      return;
    }
    acc.push({
      sum: item.sum + nextItem.sum,
      items: [...item.items, nextItem.sum],
      indexes: [...item.indexes, nextIndex],
    });
  });
  return acc;
};

const partTwo = (expenseReport) => {
  const preparsedReport = expenseReport.map((item, index) => ({
    sum: item,
    items: [item],
    indexes: [index],
  }));

  const triplet = preparsedReport
    .reduce(combineExistingItemsReducer(preparsedReport), [])
    .reduce(combineExistingItemsReducer(preparsedReport), [])
    .find((i) => i.sum === RESULTING_AMOUNT).items;

  return triplet[0] * triplet[1] * triplet[2];
};

module.exports = {
  partOne,
  partTwo,
};
