'use strict';

/**
 * element toggle function
 */

const toggleElem = function (elem) {
  elem.classList.toggle('active');
};

/**
 * navbar toggle
 */

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < navTogglers.length; i++) {
  navTogglers[i].addEventListener('click', function () {
    toggleElem(navbar);
    toggleElem(overlay);
  });
}

/**
 * header sticky & back to top button
 */

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

/**
 * search box toggle
 */

const searchTogglers = document.querySelectorAll('[data-search-toggler]');
const searchBox = document.querySelector('[data-search-box]');

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener('click', function () {
    toggleElem(searchBox);
  });
}
