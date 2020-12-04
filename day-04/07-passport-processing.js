const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const main = (passports) => {
  return passports.reduce((acc, passport) => {
    const fields = passport.split("\n").join(" ").split(" ");
    const isEveryFieldInPassport = requiredFields.every((reqField) =>
      fields.find((field) => field.startsWith(reqField))
    );
    if (isEveryFieldInPassport) {
      acc += 1;
    }
    return acc;
  }, 0);
};

module.exports = main;
