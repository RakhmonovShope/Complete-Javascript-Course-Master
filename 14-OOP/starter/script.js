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

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
// new Car.prototype.accelerate = function(){
//     this.newSpeed = this.currentSpeed + 10;
// }

const bmw = new Car('BMW', 330);
const mercedes = new Car('Mercedes', 320);

Car.prototype.accelerate = function () {
  return (this.speed = this.speed + 10);
};

Car.prototype.brake = function () {
  return (this.speed = this.speed - 5);
};

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

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return (this.age = 2021 - this.birthYear);
  }
  get getName() {
    return this.firstName;
  }

  set setName(name) {
    console.log(name);
    if (name.includes(' ')) this.firstName = name;
    else alert(`${name} is not a fullName`);
  }
}

const azimjon = new Person('Azimjon', 1997);
// console.log(azimjon.calcAge());
console.log(azimjon);
// console.log(azimjon.getName);
// azimjon.setName = 'shope sdasdass';
console.log(azimjon);
// <!-----------------   Getters and Setters -------------->

// const bank = {
//   name: 'Aloqa Bank',
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
