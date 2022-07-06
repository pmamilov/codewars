//Convert string to camel case
function toCamelCase(s){
  return s.replace(/[-_](.)/g, (_, e) => '('+e+')');
  // return s.replace(/(?<=[-_])\w/g, (e)=> e.toUpperCase()).
  //         replace(/[_-]/g, '');
}

console.log( toCamelCase('the-stealth_warrior') );
