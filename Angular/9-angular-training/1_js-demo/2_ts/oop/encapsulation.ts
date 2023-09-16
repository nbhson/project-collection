class Person {
  // access modifier
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // getter
  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  // setter
  public setName(name: string) {
    this.name = name;
  }

  public setAge(age: number) {
    this.age = age;
  }
}