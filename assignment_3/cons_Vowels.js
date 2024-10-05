// Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let string='HELLOMYNAMEISSUNNY';
let vow=['A','E','I','O','U'];
let count=0,count1=0;
for(let i=0;i<string.length;i++)
{
    if(string.includes(vow))
    {
        count++;
    }
    else
    count1++;
}
console.log(`The consonant present in the string is ${count} and the vowels present in the string is ${count1}`);