// let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let Word='INDIA';
let string=Word.split('');
string.splice(3,0,'O','N','E','S');
let str=' ';
for(let i=0;i<string.length;i++)
{
str+=string[i];
}
console.log(str);