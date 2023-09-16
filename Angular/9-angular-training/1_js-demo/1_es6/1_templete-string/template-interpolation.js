const numA = 6;
const numB = 9;

const sumConcat = 'Sum of '.concat(numA, ' and ', numB, ' is: ', (numA + numB), ',');
const sumOperator = 'Sum of ' + numA + ' and ' + numB + ' is: ' + (numA + numB) + ',';
const sumTemplate = `Sum of ${numA} + and  ${numB} + is:  ${numA + numB}`;

console.log(sumConcat);
console.log(sumOperator);
console.log(sumTemplate);
