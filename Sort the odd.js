//Sort the odd
function sortArray(a) {
  let even = a.map(x=> x % 2 === 0 ? x : null);
  let odd = a.filter(x=> x % 2 !== 0).sort((b,c)=>b-c);
  let result = [];
  let j = 0;
  for(let i of even) {
    if(i===null) {
      result.push(odd[j]);
      ++j;
    } else {
      result.push(i);
    }
  }

  return result
}

console.log( sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) );
