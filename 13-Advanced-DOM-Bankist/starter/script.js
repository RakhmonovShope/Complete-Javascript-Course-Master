// 'use strict';

// ///////////////////////////////////////
// // Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.forEach(btn => {
//   btn.addEventListener('click', openModal);
// });

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// const allButtons = document.getElementsByTagName('button');

// function* countAppleSales() {
//   let saleList = [3, 7, 5];
//   for (let i = 0; i < saleList.length; i++) {
//     yield saleList[i];
//   }
// }

// let appleStore = countAppleSales()  // Generator { }
// console.log(appleStore.next())      // { value: 3, done: false }
// console.log(appleStore.next())      // { value: 7, done: false }
// console.log(appleStore.next())      // { value: 5, done: false }
// console.log(appleStore.next())

function* counter(value) {
  let step;

  while (true) {
    step = yield ++value;

    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value); // 1
console.log(generatorFunc.next().value); // 2
console.log(generatorFunc.next().value); // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value); // 15
console.log(generatorFunc.next(10).value); // 26
