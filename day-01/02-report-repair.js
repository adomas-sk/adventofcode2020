const RESULTING_AMOUNT = 2020;

const combineExistingItemsReducer = (preparsedReport) => (acc, item, index) => {
  if (
    acc.length > 0 &&
    acc[acc.length - 1].sum === RESULTING_AMOUNT &&
    acc[acc.length - 1].items.length === 3
  ) {
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

const main = (expenseReport) => {
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

module.exports = main;
