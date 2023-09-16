class Employee {
  public empName: string;
  protected empCode: number;

  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }
}

class SalesEmployee extends Employee {
  private department: string;

  constructor(department: string, name: string, code: number) {
    super(name, code);
    this.department = department;
  }

  getCode() {
    return this.empCode; 
  }

  getDepartment() {
    return this.department;
  }
}
let emp3 = new SalesEmployee("Sales", "John Smith", 123);
console.log(emp3.empName);
console.log(emp3.getCode());
console.log(emp3.getDepartment());