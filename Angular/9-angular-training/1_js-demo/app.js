function sum(value, ...rest) {
  let sum = 0;
  rest.forEach((item) => {
    sum += item;
  })
  return sum;
}

let a = 7; 
let b = 5;
let c = 6;
let d = 7;

let s = sum`Sum ${a} and ${b} and ${c} and ${d} is: 10`; 
console.log(s);

