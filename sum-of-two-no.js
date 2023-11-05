const num1 = parseInt(prompt("Enter the first number"));
const num2 = parseInt(prompt("Enter the second number"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  const sum = num1 + num2;
  console.log("The sum is: " + sum);
}
