'use strict';
// <!---- Behind scene Very essential to note because it makes function constructor --->

// 1-step:  an empty object will be created {}
// 2-step:  this keyword attached to that function
// 3-step:  prototype will be created
// 4-step:  function return object automatically

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// const shope = new Person('ShoPe', 1997);
// const david = new Person('David', 1995);

// Person.prototype.calcAge = function () {
//   console.log(2027 - this.birthYear);
// };

// Person.prototype.friends = [
//   'Azimjon',
//   'Bekzodbek',
//   'Rustamjon',
//   'Mahmudjon',
//   'Samandarbek',
// ];
// const arr = [2, 3, 4, 5];
// console.log(jonas.__proto__.__proto__);
// console.log(arr.__proto__.__proto__);

// <!---------------------    Coding Challenge   -------------------->

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// new Car.prototype.accelerate = function(){
//     this.newSpeed = this.currentSpeed + 10;
// }

// const bmw = new Car('BMW', 330);
// const mercedes = new Car('Mercedes', 320);

// Car.prototype.accelerate = function () {
//   return (this.speed = this.speed + 10);
// };

// Car.prototype.brake = function () {
//   return (this.speed = this.speed - 5);
// };

// console.log(bmw.accelerate());
// console.log(bmw);
// console.log(bmw.brake());

// console.log(mercedes.accelerate());
// console.log(mercedes);
// console.log(mercedes.brake());

// <!--------------- CLass constructor rules ------------>

// 1-step:  Classes are not hoisted
// 2-step:  Classes are first-class citizens
// 3-step:  Classes are always in sctrict mode

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     return (this.age = 2021 - this.birthYear);
//   }
//   get getName() {
//     return this.firstName;
//   }

//   set setName(name) {
//     console.log(name);
//     if (name.includes(' ')) this.firstName = name;
//     else alert(`${name} is not a fullName`);
//   }
// }

// const azimjon = new PersonCl('Azimjon', 1997);
// console.log(azimjon.calcAge());
// console.log(azimjon);
// console.log(azimjon.getName);
// azimjon.setName = 'shope sdasdass';
// console.log(azimjon);

// <!-----------------   Getters and Setters -------------->

// const bank = {
//   name: 'Asaka Bank',
//   departments: ['Credit', 'HR', 'Security', 'Currency exchanging'],

//   get getLatestEmployee() {
//     return this.departments.slice(-1).pop();
//   },

//   set setNewEmployee(employee) {
//     this.departments.push(employee);
//     this.xx = this.departments.slice(1, 2);
//   },
// };

// console.log(bank.getLatestEmployee);
// console.log((bank.setNewEmployee = 'Reception'));
// console.log(bank);

// <!-------------- Creating prototype using Object.create() ------->

// const PersonProto = {
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const jonas = Object.create(PersonProto);
// jonas.name = 'Jonas';
// jonas.birthYear = 1991;
// jonas.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 2001);
// sarah.calcAge();

// <!-------------- #2 Coding Challenge ------------------>

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     return (this.speed += 10);
//   }
//   brake() {
//     return (this.speed -= 5);
//   }

//   get speedUS() {
//     console.log((this.speed /= 1.6));
//   }

//   set speedUS(speed) {
//     console.log((this.speed = speed * 1.6));
//   }
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// console.log('Bmw:', bmw);
// console.log('Mercedes:', mercedes);

// bmw.accelerate();
// bmw.brake();
// bmw.speedUS;
// bmw.speedUS = 10;
// mercedes.accelerate();
// mercedes.brake();

//  <!------ Inheritance between classes constructor functions ---->

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const Student = function (firstName, birthYear, courses) {
//   Person.call(this, firstName, birthYear);
//   this.courses = courses;
// };

// // classlar bilan ham tekshir
// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// Student.prototype = Object.create(Person.prototype);

// const jonas = new Student('Jonas', 1991, 'Computer vision');

// jonas.calcAge();
// console.log(jonas instanceof Person);
// console.log(jonas instanceof Student);
// console.log(jonas instanceof Object);

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2021 - this.birthYear);
  }
}

class StudentCl {
  constructor(courses) {
    PersonCl.call(this, firstName, birthYear);
    this.courses = courses;
  }
}

const jonas = new StudentCl('Jonas', 1991, 'Data set');
console.log(jonas);
