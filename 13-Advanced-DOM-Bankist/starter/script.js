'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const doc = document.documentElement;
// console.log(doc);

const byClassName = document.querySelectorAll('.section');
// console.log(byClassName);

const byIdTagName = document.getElementsByTagName('a');
// console.log(byIdTagName);

const byId = document.getElementsByTagName('a');
// console.log(byId);

const byClassNames = document.getElementsByClassName('btn--close-modal');
// console.log(byClassNames);

const header = document.querySelector('.header');

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookie for improved functionality and analytics.';

// const button = document.createElement('button');
// button.classList.add('btn');
// button.textContent = 'close';

// message.prepend(button);

// // header.prepend(message);
// // header.append(message);
// // header.before(message);
// header.after(message);

// header.insertAdjacentElement('beforebegin', message);
// header.insertAdjacentElement('afterbegin', message);
// header.insertAdjacentElement('beforeend', message);
// header.insertAdjacentElement('afterend', message);

// button.addEventListener('click', () => {
//   message.remove();
// });

// message.style.backgroundColor = '#37383d';

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// const anchor = document.querySelector('.nav__link');

//                    not standart
// anchor.fields
//                  but it can be fixed like below
// anchor.setAttribute('fields', '232dsa');
// anchor.getAttribute('fields');

//   method below is much more dangerous becouse it overwrite all classNames and clears ald ones
// anchor.className = 'dsa';

//   this method is much more useful and safe
// anchor.classList.add('b', 'sd');
// anchor.classList.remove('b', 'sds');
// anchor.classList.toggle('b', 'sda');
// console.log(anchor.classList.contains('d')); // return false

// document.documentElement.style.setProperty('--color-primary', 'orangered');

const scroolToBtn = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

scroolToBtn.addEventListener('click', e => {
  const coors1 = section1.getBoundingClientRect();
  // console.log(window.pageXOffset), console.log(window.pageYOffset);
  // window.scrollTo({
  //   left: coors1.left + window.pageXOffset,
  //   top: coors1.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // document.documentElement.clientHeight;
  // document.documentElement.clientWidht;
  section1.scrollIntoView({ behavior: 'smooth' });
});

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const h1 = document.querySelector('h1');
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);

const div = document.querySelector('.testimonial__header');

// console.log(div.parentNode);
// console.log(div.parentElement);

h1.closest('.header').style.backgroundColor = 'var(--gradient-primary)';
// Element uchun
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// Node uchun
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
const operations = document.querySelector('.operations');

document
  .querySelector('.operations__tab-container')
  .addEventListener('click', function (el) {
    const clicked = el.target.closest('.operations__tab');
    if (!clicked) return;
    [...clicked.parentElement.children].forEach(e =>
      e.classList.remove('operations__tab--active')
    );
    clicked.classList.add('operations__tab--active');
    const dataTab = clicked.getAttribute('data-tab');

    [...operations.children]
      .filter(subEl => subEl.classList.contains('operations__content'))
      .forEach((el, i) => {
        el.classList.remove('operations__content--active');

        if (el.classList.contains(`operations__content--${dataTab}`)) {
          el.classList.add('operations__content--active');
        }
      });
  });

const nav = document.querySelector('.nav');

const changeOpacity = function (el) {
  if (el.target.classList.contains('nav__link')) {
    const link = el.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(e => {
      if (e != link) {
        e.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};

nav.addEventListener('mouseover', changeOpacity.bind(0.5));

nav.addEventListener('mouseout', changeOpacity.bind(1));

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
  section.classList.add('section--hidden');
});

const images = document.querySelectorAll('img[data-src]');

const loadImage = function (entries, observer) {
  const [entry] = entries;
  const element = entry.target;
  if (!entry.isIntersecting) return;
  element.src = element.getAttribute('data-src');

  element.addEventListener('load', function (e) {
    element.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const revealImages = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0.15,
  rootMargin: '-200px',
});

images.forEach(el => {
  revealImages.observe(el);
});
