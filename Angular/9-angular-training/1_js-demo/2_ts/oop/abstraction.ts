abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;
}

class Dog extends Animal {
  public makeSound(): void {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  public makeSound(): void {
    console.log("Meow!");
  }
}

const myDogg = new Dog("Lucy");
myDogg.makeSound(); // Woof!

const myCat = new Cat("Fluffy");
myCat.makeSound(); // Meow!