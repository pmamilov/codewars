function isTriangle(a,b,c)
{
  [a, b, c] = [a,b,c].sort(((x, y) => x - y));
  return a + b > c;
}

console.log( isTriangle(5,5,-2) );
