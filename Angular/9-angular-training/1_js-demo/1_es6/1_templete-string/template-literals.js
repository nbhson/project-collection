function sum(arrayString, firstExpression, secondExpression) {
  console.log(arrayString);
  return firstExpression + secondExpression;
}
const numA = 6;
const numB = 9;
const result = sum`${numA} and ${numB}`;

console.log(result) 
