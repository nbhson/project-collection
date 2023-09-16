interface Person {
  name: string;
  age: number;
  greet: () => void;
}

class Police implements Person {
  name: string;
  age: number;
  department: string;

  constructor(name: string, age: number, department: string) {
    this.name = name;
    this.age = age;
    this.department = department;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I work in the ${this.department} department.`);
  }
}

const emp = new Police("John", 30, "Sales");
emp.greet(); // output: Hello, my name is John and I work in the Sales department.
