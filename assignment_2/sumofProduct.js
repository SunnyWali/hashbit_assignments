// Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

const hello=function(num1,num2)
{
    let str1=num1.toString();
    let str2=num2.toString();

    while(str1.length<str2.length)
    {
        str1='0'+str1;
    }
    while(str2.length<str1.length)
    {
        str2='0'+str2;
    }

    let sum=0;
    for(let i=0;i<str1.length;i++)
    {
        sum+=parseInt(str1[i])*parseInt(str2[i]);
    }
    return sum;
}

console.log(hello(123,64));