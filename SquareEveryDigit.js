function squareDigits(n){
  return [...n.toString()].reduce((sum,x)=> sum + x, 0);
}

console.log(squareDigits(3212));
