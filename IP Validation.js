//IP Validation
function isValidIP(s) {
  return /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(s);
}

console.log(isValidIP('137.255.156.100'));
