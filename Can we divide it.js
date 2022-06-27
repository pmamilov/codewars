//Can we divide it?
function isDivideBy(number, a, b) {
  return number % Math.abs(a) === 0 && number % Math.abs(b) === 0;
}

console.log( isDivideBy(-12, 2, -4) );
