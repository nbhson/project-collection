/** Global */
var message = "Global";
function logger() {
  console.log(message);
}
logger()

/** Code block */
{
  let age = 18;
  console.log(age);
}
console.log(age);

/** Local scope */
function logger() {
  var name = "Son";
}
logger();
console.log(name);
