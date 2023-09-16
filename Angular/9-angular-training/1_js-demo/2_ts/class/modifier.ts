class Employee {
  public empCode: number;
  protected empName: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.empName = name;
  }
}

class SalesEmployee extends Employee {
  private department: string;

  constructor(department: string, empCode: number, empName: string) {
    super(empCode, empName);
    this.department = department;
  }
}

let emp = new SalesEmployee('Sales', 100, 'John Smith');
console.log(emp);
