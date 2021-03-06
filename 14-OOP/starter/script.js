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
// 2-step:  Classes are first-class citizens (We cannot pass them into the functions and return them from the functions )
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

// <!------------   #3 Code Challenge  --------------->

// const Car = function (make, currentSpeed) {
//   this.make = make;
//   this.currentSpeed = currentSpeed;
// };

// const EV = function (make, currentSpeed, charge) {
//   Car.call(this, make, currentSpeed);
//   this.charge = charge;
// };

// Car.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// Car.prototype.accelerate = function (increment, decrement) {
//   this.currentSpeed += increment;
//   this.charge -= decrement;

//   console.log(
//     `Porschee Taycan going at ${this.currentSpeed}, with a charge of ${this.charge} `
//   );
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.accelerate = function () {
//   this.make = 'Tesla';
//   console.log(this.make);
// };

// const porsche = new EV('Porschee', 220, 45);
// porsche.chargeBattery(55);

// console.log(porsche);
// porsche.accelerate();

//  <!------ Inheritance between classes ES6 Classes ---->

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there ????');
//   }
// }

// const jonas = new PersonCl('Jonas Schmedmant', 1991);

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

// martha.introduce();
// martha.calcAge();

//  <!------ Inheritance between classes Object.create() ---->

// const PersonProto = {
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
//   console.log(this);
// };

// const martha = Object.create(StudentProto);

// martha.init('Martha', 1997, 'web');
