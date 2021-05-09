'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
//   <!---------------------- Destructuring Objetcs   ------------------------->
// const [a, , c] = restaurant.categories;

// console.log(a, c);

// const [risotta, veg] = restaurant.selectByName('Risotto', 'Vegetarian');
// console.log(risotta, veg);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// let { categories: menu = [], name: restaurantName= [] } = restaurant;
// console.log(typeof menu, typeof restaurantName);

// let a = 111;
// let b = 222;

// const obj = { a: 12, b: 23, c: 55 };

// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = hours;
// console.log(o, c);

// const Jonas = {
//   name: 'Jonas',
//   address: 'Ulugbek 59',
//   getUp: '08.00',
//   friends: ['Eliot', 'Stiven', 'Grider'],
//   fri: {
//     open: 12,
//     close: 24,
//   },
// };
// const { getUp: tur = [], friends: dostlar = [], name: ism = [] } = Jonas;
// // const { getUp: tur, friends: dostlar, name: ism } = Jonas;

// console.log(typeof tur, typeof dostlar, typeof ism);
// const {
//   fri: { open: ochiq, close: yopiq },
// } = Jonas;

// console.log(ochiq, yopiq);
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const [players1] = game.players;
// const [, players2] = game.players;
// const [players1, players2] = game.players;
// // console.log(players1);
// // console.log(players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Cautinho', 'Perisic'];
// // console.log(players1Final);

// const {
//   odds: { team1: team1 = [] , team2: team2 = [], x: draw = [] },
// } = game;
// // console.log(team1, draw, team2);

// const printGoals = function ({ scored, players }) {
//   console.log(...scored);
//   console.log(...players[0]);
// };

// printGoals(game);

// console.log(team1 < team2 || team2);

// const Jonas = {
//   name: 'jonas',
//   friends: ['Azim', 'shahzod', 'Akbar'],
//   age: 23,
//   isMarried: false,
// };

// const shope = Object.assign({}, Jonas);
// shope.age = 24;
// shope.friends[1] = 'Bekzod';
// console.log(Jonas);
// console.log(shope);

////////////////////////////// Data structure
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //    <!----------------  Object literals  ------------------->
    selectByName(menuName, categoryName) {
        return [
            this.mainMenu[this.mainMenu.indexOf(`${menuName}`)],
            this.categories[this.categories.indexOf(`${categoryName}`)],
        ];
    },
    //    <!----------------  Object literals  ------------------->
    openingHours: {
        [weekdays[3]]: {
            open: 12,
            close: 22,
        },
        [weekdays[4]]: {
            open: 11,
            close: 23,
        },
        [weekdays[5]]: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};
// console.log(restaurant.openingHours);

// <!------------  Optional chaining ----------------->

// console.log(restaurant?.openingHours?.sat ?? 'this has no wednesday');

// <!-----------------  Object looping keys , values and entries ------->

// const openDays = Object.keys(restaurant.openingHours);

// for (let day of openDays) {
//   console.log(day);
// }

// const openValues = Object.values(restaurant.openingHours);

// for (let day of openValues) {
//   console.log(day);
// }

// const restaurents = Object.entries(restaurant.openingHours);
// console.log(restaurents);

// for (let [key, { open, close }] of restaurents) {
//   console.log(key);
//   console.log(open, close);
// }

// <!------------------ Coding challenge ----------------->
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1:
// const { scored } = game;

// console.log(scored);
// for (let [key, player] of Object.entries(scored)) {
//   console.log(`Goal ${Number(key) + 1}: ${player}`);
// }

// <!--------------------   Sets ---------------------------->

// let arr = [1, 2, 3, 3, 4, 5, 6, 7, 10, 23, 2, 4];
// const toplam = new Set(arr);
// toplam.add(100);
// toplam.delete(2);
// toplam.delete(8);
// console.log(arr.length);
// console.log(toplam.size);

// console.log(toplam);

// arr = [...toplam];

// console.log(arr);

// <!----------------  Higher Order Functions ------------------>

// const oneWord = function (str) {
//   return str.replace(/ /g, ' ').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split('');
//   return [first.toUpperCase(), ...others].join('');
// };

// // Higher Order Function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Name of HOF is ${fn.name}`);
// };

// transformer('java script', upperFirstWord);

// <!----------------------- Function returning functions ----------------->

// const greet = function (text) {
//   return function (another) {
//     console.log(`${text}, qale kachok ${another}`);
//   };
// };

// greet('jonas')('shope');

// <!------------------ bind() call() apply() ------------------>

//<!--------------------- call ---------------->

// var car = {
//   registrationNumber: 'GA12345',
//   brand: 'Toyota',
//   booking: [],

//   displayDetails(name, hello) {
//     this.booking =
//       this.registrationNumber + ' ' + this.brand + `${name}` + ` ${hello}`;
//   },
// };
// car.displayDetails(23, 'hello wolrd');
// car.displayDetails(242, 'dsdsaello wolrd');

// console.log(luthanza);

//<!--------------------- Bind ---------------->
// var car = {
//   registrationNumber: 'GA12345',
//   brand: 'Toyota',

//   displayDetails: function () {
//     console.log(this.registrationNumber + ' ' + this.brand);
//   },
// };

// var myCar = {
//   registrationNumber: 'AA6176427',
//   brand: 'Hummer',
// };

// var luthanza = {
//   registrationNumber: 'Cobal',
//   brand: 'maturul',
//   booking: [],
//   calcAge(birthday, workingExp) {
//     this.booking.push(
//       `mashina: ${this.registrationNumber} nomi: ${this.brand} age: ${birthday} working: ${workingExp}`
//     );
//   },
// };

// var swiss = {
//   registrationNumber: 'Nexia',
//   brand: 'Zil',
//   booking: [],
// };

// var swiss1 = {
//   registrationNumber: 'Nexia',
//   brand: 'Zil',
//   booking: [],
// };

// tt(23, 43);
// rr(23, 43);
// console.log(swiss);

// luthanza.planes = 300;
// luthanza.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// luthanza.buyPlane();
///////////////////////////////////////////////////////////////////////////////
// const airLine = 'Tap Air Portugal';
// const plane = 'A320';

// console.log(airLine[0]);
// console.log(airLine.length);
// console.log('ShoPe7444'.length);
// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('g'));
// console.log(airLine.indexOf('Portugal'));
// console.log(airLine.lastIndexOf('Portugal'));

// console.log(typeof 'shope');
// console.log(typeof new String().slice());

// const checkMiddleSeat = function (seat) {
//     const s = seat.slice(-1);

//     s === 'B' || s === 'E'
//         ? console.log('You got the middle seat 🤣')
//         : console.log('You are lucky 😎');
// };

// checkMiddleSeat('33B');
// checkMiddleSeat('44E');
// checkMiddleSeat('44G');

// console.log(
//     airLine.slice(0, airLine.indexOf(' ')).toLowerCase().replace('t', 'T')
// );
// const yolovchi = 'aZimJoN';

// const kichikHarf = yolovchi.toLowerCase();

// const togri = kichikHarf[0].toUpperCase() + kichikHarf.slice(1);

// const number1 = 4239828;

// const strNum = number1.toString();

// let lastNum = strNum[0];
// for (let i = 1; i < strNum.length; i = i + 3) {
//     lastNum += ' ' + strNum.slice(i, i + 3);
// }
// console.log(lastNum);

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const fullName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

// console.log(fullName);

// const pessenger = 'jessica ann smith davis'.split(' ');
// console.log(pessenger);
// let newName = [];
// for (const x of pessenger) {
//     // newName.push(x[0].toUpperCase() + x.slice(1));

//     newName.push(x.replace(x[0], x[0].toUpperCase()));
// }

// console.log(newName.join(' '));

// const paddingAdd = function (number) {
//     console.log(number.toString().padStart(30, '+').padEnd(35, '+'));
// };

// paddingAdd(321312312);

// console.log('asdasdasdasdas \n'.repeat(2));

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const txtArea = document.querySelector('textarea').value;
    const all = txtArea.split('\n');
    let i = 1;
    for (const x of all) {
        let newTxtArea = [];
        const splittedText = x.toLowerCase().split('_').trim();

        newTxtArea =
            splittedText[0] +
            splittedText[1].replace(
                splittedText[1][0],
                splittedText[1][0].toUpperCase()
            );
        console.log(newTxtArea + '  \t' + '✅'.repeat(i));
        i++;
    }
});
