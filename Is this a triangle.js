function isTriangle(a,b,c)
{
  let p = ((a+b+c)/2).toFixed();
  let s = Math.sqrt(p*((p-a)*(p-b)*(p-c)));
}

console.log( isTriangle(5,5,-2) );
