function isTriangle(a,b,c)
{
  let p = ((a+b+c)/2).toFixed(2);
  let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
  return s;
}

console.log( isTriangle(7,2,2) );
