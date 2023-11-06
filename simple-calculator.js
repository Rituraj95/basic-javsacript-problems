const operator=prompt("enter the operator(+,-,/,%....)");
const num1=parseInt(prompt("enter the first no:"));
const num2=parseInt(prompt("enter the second no:"));
let result;
if(operator=='+'){
    result=num1+num2;
}
else if(operator=='-'){
    result=num1-num2;
}
else if(operator=='%'){
    result=num1%num2;
}
else if(operator=='/'){
    result=num1/num2;
}
else {
    result=num1*num2;
}
console.log(result)
