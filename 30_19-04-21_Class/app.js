// //через функцию-конструктор

// // function Person(name, age, profession) {
// //   this.name = name;
// //   this.age = age;
// //   this.profession = profession;
// // }

// //через классы
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// class Employee extends Person {
//   constructor(name, age, profession, salary) {
//     super(name, age);
//     this.profession = profession;
//     this.salary = salary;
//   }
// }

// class Child extends Person {
//   constructor(name, age, toy) {
//     super(name, age);
//     this.toy = toy;
//   }
//   canSmile() {
//     console.log(`${this.name} - I can smile`);
//   }
// }

// class SchoolChild extends Child {
//   constructor(name, age, toy, group) {
//     super(name, age, toy);
//     this.group = group;
//   }
//   // переопределили метод для школьника
//   sayHello() {
//     console.log(
//       `hello, my name is ${this.name} and I'm learning in ${this.group}`
//     );
//   }
// }

// const ivan = new Employee("Ivan", 26, "IT Manager", 1000);
// const yuri = new Child("Yuri", 10, "Bear");
// const grisha = new SchoolChild("Grisha", 17, "car", "10-a");

// console.log(ivan);
// console.log(yuri);
// grisha.sayHello();

class Animal {
  constructor(type) {
    this._type = type;
  }
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value;
  }
}

const dog = new Animal(null);
