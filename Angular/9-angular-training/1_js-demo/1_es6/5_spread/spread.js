const array1 = ["JS", "PHP", "Ruby"];
const array2 = ["CSS", "HTML"];
const array3 = [...array1, ...array2];
console.log(array3);
// ["JS", "PHP", "Ruby", "CSS", "HTML"]; 

const obj1 = { name: "JS" };
const obj2 = { price: 1000 };
const obj3 = {
  ...obj1,
  ...obj2,
}
console.log(obj3);
// {name: "JS", price: "1000"}

var defaultConfig = {
  api: "https://jsonplaceholder.typicode.com/todos/1",
  apiVersion: "v1",
  other: "other",
};
var exerciseConfig = {
  ...defaultConfig,
  api: "https://jsonplaceholder.typicode.com/todos/2",
};
console.log(exerciseConfig);