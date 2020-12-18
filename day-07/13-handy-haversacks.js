const SHINY_GOLD_BAGS = 'shiny gold bags';
const NO_OTHER_BAGS = 'no other bags';

const checkForGoldBag = (possibleBags, currentBag) => {
  const bagContents = possibleBags[currentBag];
  if (bagContents.find((item) => item.bag === SHINY_GOLD_BAGS)) {
    return true;
  }
  if (bagContents.find((item) => item.bag !== NO_OTHER_BAGS)) {
    return bagContents.map((item) => checkForGoldBag(possibleBags, item.bag)).find((i) => i);
  }
  return false;
};

const main = (rules) => {
  const possibleBags = {};
  rules.forEach((_rule) => {
    const [rule] = _rule.split('.');
    const [bag, contains] = rule.split(' contain ');
    const parsedContents = contains.split(', ').map((bag) => {
      if (bag === NO_OTHER_BAGS) {
        return { count: 0, bag };
      }
      const [number] = bag.split(' ');
      const bagName = bag.slice(number.length + 1);
      return { count: parseInt(number), bag: `${bagName}${parseInt(number) === 1 ? 's' : ''}` };
    });
    possibleBags[bag] = parsedContents;
  });
  return Object.keys(possibleBags).reduce((acc, bagName) => {
    if (checkForGoldBag(possibleBags, bagName)) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

module.exports = main;
