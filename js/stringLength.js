const stringLength = (str) => {
  if (str.length < 1) throw new Error('Input string must be at least 1 character long.');
  if (str.length > 10) throw new Error('Input string must not be longer than 10 characters.');
  return str.length;
};

module.exports = stringLength;
