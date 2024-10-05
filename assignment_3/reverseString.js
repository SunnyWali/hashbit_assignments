function revString(string) {
  let array = string.split("");
  str = "";
  for (let i = array.length - 1; i >= 0; i--) {
    str += array[i];
  }
  return str;
}

console.log(revString("Hello"));
