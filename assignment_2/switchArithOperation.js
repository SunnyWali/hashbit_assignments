// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

const hello=(num1,num2)=>
{
    const choice=prompt(`enter 1 for addition\n enter 2 for subtraction\n enter 3 for multiplication\n enter 4 for division`);
    switch(choice)
    {
            case '1':
            return (num1+num2);
            break;

            case '2':
            return (num1-num2);
            break;

            case '3':
            return (num1*num2);
            break;

            case '4':
            return (num1/num2);
            break;

            default:
                return `Invalid input`;

    }   
}

num1=Number(prompt("enter the number"));
num2=Number(prompt("enter second number"));
console.log(hello(num1,num2));