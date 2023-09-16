// number
let first: number = 123;
let hexadecimal: number = 0x37CF;

// string 
let employeeName: string = 'John Smith'; 
let employeeDesc2: string = `${employeeName} works in the department.`; 

// boolean
let isPresent: boolean = true;

// array
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
let fruitsTS: Array<string> = ['Apple', 'Orange', 'Banana'];
let ids: Array<number>;
ids = [23, 34, 100, 124, 44]; 

// void
function printSomething() : void {
  console.log('Hello!')
}

// tuple
var empId: number = 1;
var empName: string = "Steve";
var employee: [number, string] = [1, "Steve"];

var employeeArr: [number, string, number][];
employeeArr = [[1, "Steve", 28], [2, "Bill", 25], [3, "Jeff", 18]];

// union 
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
// code = false; // Compiler Error

// any 
let something: any = "Hello World!";
something = 23;
something = true;

let arr: any[] = ["John", 212, true];
arr.push("Smith");
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 

// enum
enum PrintMedia {
  Newspaper = 1,
  Newsletter = getPrintMediaCode('newsletter'),
  Magazine = Newsletter * 3,
  Book = 10
}

function getPrintMediaCode(mediaName: string): number {
  if (mediaName === 'newsletter') {
    return 5;
  }
  return 10;
}