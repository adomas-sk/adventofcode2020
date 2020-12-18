const SHINY_GOLD_BAGS = 'shiny gold bags';
const NO_OTHER_BAGS = 'no other bags';

const getBagsInside = (possibleBags, currentBag) => {
  return currentBag.reduce((acc, item) => {
    if (item.bag === NO_OTHER_BAGS) {
      return acc;
    }
    return acc + item.count + item.count * getBagsInside(possibleBags, possibleBags[item.bag]);
  }, 0);
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

  const goldBag = possibleBags[SHINY_GOLD_BAGS];

  return getBagsInside(possibleBags, goldBag);
};

module.exports = main;
