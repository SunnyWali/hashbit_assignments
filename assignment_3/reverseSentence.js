// let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

function strRev(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(strRev("I love my India"));
