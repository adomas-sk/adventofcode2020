const main = (passwordList) => {
  return passwordList.reduce((acc, line) => {
    const [fromTo, _letter, password] = line.split(' ');
    const [minAmount, maxAmount] = fromTo.split('-');
    const letter = _letter[0];
    
    const countOfLetter = (password.match(new RegExp(letter, 'g')) || []).length;
    if (countOfLetter >= parseInt(minAmount) && countOfLetter <= parseInt(maxAmount)) {
      acc += 1;
    }
    return acc;
  }, 0);
}

module.exports = main;
