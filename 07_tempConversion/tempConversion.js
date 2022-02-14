const ftoc = function(temp) {
  let cel = [(temp - 32) * (5/9)];
  cel = Math.round(cel*10);
  cel = cel/10;
  return cel;
};

const ctof = function(temp) {
  let frh = (temp * (9/5) + 32);
  frh = Math.round(frh * 10);
  frh = frh/10;
  return frh;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
