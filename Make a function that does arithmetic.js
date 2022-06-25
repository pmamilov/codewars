function arithmetic(a, b, operator){

switch (operator) {
  case 'add':
    return a + b;
    break;
  case 'subtract':
    return a - b;
    break;
  case 'multiply':
    return a * b;
    break;
  default:
    return a / b;
}

}

console.log( arithmetic(859, 8, "divide") );
