abstract class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract getName(string): string;
}

class Student extends Person {
  stCode: number;

  constructor(stCode: number, name: string) {
    super(name);
    this.stCode = stCode;
  }

  getName(): string {
    return this.name;
  }
}
