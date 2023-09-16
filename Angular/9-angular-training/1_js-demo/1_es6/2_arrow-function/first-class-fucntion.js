// VD 1
function greeting() {
  console.log("Hello World");
}
greeting();
greeting.lang = "English";
console.log(greeting.lang); // English

// VD2
const square = function (x) {
  return x * x;
};
const foo = square;

square(5); // 25
foo(6); // 36

// VD3
function formalGreeting() {
  console.log("How are you?");
}
function casualGreeting() {
  console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
  if (type === "formal") {
    greetFormal();
  } else if (type === "casual") {
    greetCasual();
  }
}
// prints 'What's up?'
greet("casual", formalGreeting, casualGreeting);
