'use strict';
/////////////////////////////////////////////////
{
  /*
// .slice()

// .splice()

// .concat()

// .[...arr, ...arr2]

// for( const x of arr){

// }

// .foreach()

// Coding challenge #1

const juliaDogs1 = [3, 5, 2, 12, 7];
const kateDogs1 = [4, 1, 15, 8, 3];

const juliaDogs2 = [9, 16, 6, 8, 3];
const kateDogs2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulias, dogsKate) {
  const copyJulia = [...dogsJulias]; //It is a bad practice that mutating function parametrs . Always keep in mind .

  copyJulia.splice(0, 1);
  copyJulia.splice(-2);

  const allDogs = [...copyJulia, ...dogsKate];

  allDogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult and dog is ${dog} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still puppy 🐶 and ${dog} years old`);
    }
  });

  return allDogs;
};

checkDogs(juliaDogs1, kateDogs1);
checkDogs(juliaDogs2, kateDogs2);
*/
}

{
  /*
/////////////////////////////////////////////////

// .map()

// .filter()

// .reduce()

// Coding challenge #2

const dataSet1 = checkDogs(juliaDogs1, kateDogs1);
const dataSet2 = checkDogs(juliaDogs2, kateDogs2);

const caclAverageHumanAge = function (dogAges) {

  const humanAge = dogAges.map(dogAge => {
    if (dogAge <= 2) return 2 * dogAge;
    else return 16 + dogAge * 4;
  });
  console.log(`humanAge: ${humanAge}`);

  const eightYearsOldDogs = humanAge.filter(dog => {
    return dog <= 18;
  });
  console.log(`toEightYears: ${eightYearsOldDogs}`);

  const adultDogs = dogAges.filter(adultDog => {
    return adultDog >= 3;
  });
  console.log(`adultDogs: ${adultDogs}`);

  const averageAdultAge =
    adultDogs.reduce((acc, curr) => acc + curr) / adultDogs.length;
  console.log(averageAdultAge);
};

caclAverageHumanAge(dataSet1);
caclAverageHumanAge(dataSet2);

*/
}

{
  /*
  /////////////////////////////////////////////////

  // .map().filter().reduce()

  // chaining

  // Coding challenge #3

  const dataSet1 = checkDogs(juliaDogs1, kateDogs1);
  const dataSet2 = checkDogs(juliaDogs2, kateDogs2);

  const caclAverageHumanAge = dogAges => {
    const eightYearsOldDogs = dogAges
      .map(dogAge => {
        if (dogAge <= 2) return 2 * dogAge;
        else return 16 + dogAge * 4;
      })
      .filter(dog => {
        return dog <= 18;
      });

    console.log(eightYearsOldDogs);

    const averageAdultAge = dogAges
      .filter(adultDog => adultDog >= 3)
      .reduce((acc, curr, i, arr) => acc + curr / arr.length);

    console.log(averageAdultAge);
  };

  caclAverageHumanAge(dataSet1);
  caclAverageHumanAge(dataSet2);
*/
}

{
  /*
  /////////////////////////////////////////////////

  .find()

  .findIndex()

  .some() .every()

  .flat .flatMap()

  .sort() 

  .fill()

  .Array.from();

  # Coding challenge #4

  */
}

/////////////////////////////////////////////////
// BANKIST APP
//BUG
//FIXME
//VIDEO
//TODO

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

const insertMovements = function (movements, sort) {
  containerMovements.innerHTML = '';

  let movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((money, i) => {
    const type = money > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${money}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => {
    return acc + curr;
  });

  labelBalance.textContent = `${acc.balance} € `;
};

const displaySummary = function (account) {
  let hasNegative = false;

  for (const x of account.movements) {
    if (x < 0) {
      hasNegative = true;
      break;
    }
  }

  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr);

  labelSumIn.textContent = `${incomes}€`;

  let outcomes;
  hasNegative
    ? (outcomes = account.movements
        .filter(mov => mov < 0)
        .reduce((acc, curr) => acc + curr))
    : (outcomes = 0);

  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  let interests = +account.movements
    .filter(mov => mov > 0)
    .map(int => (int * account.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((acc, int) => acc + int)
    .toFixed(2);

  labelSumInterest.textContent = `${interests}€`;
};
const UpdateUI = function (acc) {
  // Display movements
  insertMovements(acc.movements);

  // Display balance
  displayBalance(acc);

  // Display summary
  displaySummary(acc);
};

let currentUser;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentUser = accounts.find(
    user => user.username === inputLoginUsername.value
  );

  if (currentUser?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 1;
    let name = currentUser.owner.split(' ')[0];

    labelWelcome.textContent = `Welcome back, ${name}`;

    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    UpdateUI(currentUser);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  let transferAmount = Number(inputTransferAmount.value);
  let recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    transferAmount > 0 &&
    transferAmount <= currentUser.balance &&
    recieverAcc &&
    recieverAcc.username !== currentUser.username
  ) {
    recieverAcc.movements.push(transferAmount);
    currentUser.movements.push(-transferAmount);
    UpdateUI(currentUser);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentUser.username &&
    Number(inputClosePin.value) === currentUser.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentUser.username
    );

    accounts.splice(index, 1);
  }
  inputCloseUsername.value = inputClosePin.value = '';
  containerApp.style.opacity = 0;
  labelWelcome.textContent = 'Log in to get started';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentUser.movements.some(mov => mov > amount * 0.1)) {
    currentUser.movements.push(amount);
  }

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
  UpdateUI(currentUser);
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  insertMovements(currentUser.movements, !sorted);

  sorted = !sorted;
});

document
  .querySelector('.balance__value')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const accountUI = Array.from(
      document.querySelectorAll('.movements__value'),
      el => Number(el.textContent.replace('€', ''))
    );
    console.log(accountUI);
  });
