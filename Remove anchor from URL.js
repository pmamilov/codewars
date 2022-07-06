function removeUrlAnchor(url){
  return url.replace(/#.+/g, '');
}

console.log( removeUrlAnchor('www.codewars.com#about') );
