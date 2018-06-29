var ftoc = function(deg) {
  let result = (deg - 32) * .5556;
  // below is to round to neares 1 decimal place, when needed
  // how rounding code line works, not sure
  // exponnential notation: 1.005e2 => 1.01
  return Number(Math.round(result + 'e' + 1) + 'e-' + 1);
}

var ctof = function(deg) {
  let result = deg * (9/5) + 32;
  return Number(Math.round(result + 'e' + 1) + 'e-' + 1);
}

module.exports = {
  ftoc,
  ctof
}
