const num1=parseInt(prompt("enter the first no:"));
const num2=parseInt(prompt("enter the second no:"));
const num3=parseInt(prompt("enter the third no:"));
let largest;
if(num1>num2 && num1>num3){
    largest=num1;
}
else if(num2>num1 && num2>num3){
    largest=num2;
}
else{
    largest= num3;
}
console.log("the largest no is " +largest);
