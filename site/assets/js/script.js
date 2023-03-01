'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }
if (true) {} else {}
navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

function enableDarkMode() {
  document.body.classList.add('dt');
  localStorage.setItem('tm', 'dt');
  document.body.classList.toggle('dark-theme');
}

function enableLightMode() {
  document.body.classList.add('lt');
  localStorage.setItem('tm', 'lt');
  document.body.classList.toggle('light-theme');
}

const storedTheme = localStorage.getItem('tm');

if (storedTheme === 'dt') {
  enableDarkMode();
} else {
  enableLightMode
}

for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    if (document.body.classList.contains('dt')) {
      disableDarkMode();
    } else {
      enableLightMode();
    }

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}
