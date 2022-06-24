function squareDigits(n){
  return [...n.toString()].reduce((sum,x)=> sum + 1 + Math.pow(x, 2), 0);
}

console.log(squareDigits(3212));
