const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const yearValidation = (min, max) => (_year) => {
  const year = parseInt(_year);
  return year >= min && year <= max;
};

const heightValidation = (height) => {
  if (height.length < 4) {
    return 0;
  }
  const lastTwoCharacters = `${height[height.length - 2]}${
    height[height.length - 1]
  }`;
  const amount = height.slice(0, height.length - 2);
  if (lastTwoCharacters === "cm") {
    return amount >= 150 && amount <= 193;
  }
  if (lastTwoCharacters === "in") {
    return amount >= 59 && amount <= 76;
  }
  return false;
};

const hairColorValidation = (hairColor) => {
  if (hairColor.length !== 7) {
    return false;
  }
  return !!hairColor.match(new RegExp("^#([a-fA-F0-9]{6})$"));
};

const eyeColorValidation = (eyeColor) => {
  const validEyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  return validEyeColors.includes(eyeColor);
};

const pidValidation = (pid) => {
  return pid.length === 9 && !!pid.match(new RegExp("^[0-9]{9}$"));
};

const validationMap = {
  byr: yearValidation(1920, 2002),
  iyr: yearValidation(2010, 2020),
  eyr: yearValidation(2020, 2030),
  hgt: heightValidation,
  hcl: hairColorValidation,
  ecl: eyeColorValidation,
  pid: pidValidation,
};

const main = (passports) => {
  return passports.reduce((acc, passport) => {
    const fields = passport.split("\n").join(" ").split(" ");
    const hasEveryField = requiredFields.every((reqField) =>
      fields.find((field) => field.startsWith(reqField))
    );
    if (!hasEveryField) {
      return acc;
    }

    const validationResults = fields.map((field) => {
      const [key, value] = field.split(":");
      if (key === 'cid') {
        return true;
      }
      if (!validationMap[key]) {
        return false;
      }
      return validationMap[key](value);
    });
    if (validationResults.every((i) => i)) {
      acc += 1;
    }
    return acc;
  }, 0);
};

module.exports = main;
