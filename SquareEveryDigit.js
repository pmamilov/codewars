function squareDigits(n){
  return +[...n.toString()].reduce((sum,x)=> sum + String(Math.pow(x, 2)), '');
}
let r = squareDigits(3212);

console.log(r);

