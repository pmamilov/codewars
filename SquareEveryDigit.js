function squareDigits(n){
  return +[...n.toString()].reduce((sum,x)=> sum + String(Math.pow(x, 2)), '');
}

console.log(squareDigits(3212));
