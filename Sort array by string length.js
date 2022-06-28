//Sort array by string length
function sortByLength(a) {
  return a.sort((x,y)=> x.length - y.length)
};

console.log( sortByLength (["Beg", "Life", "I", "To"]) );
