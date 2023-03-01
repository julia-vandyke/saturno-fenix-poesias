'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



/**
// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}
*/



// Check if the theme preference is already saved in the local storage
let theme = localStorage.getItem('theme');

// If not saved, check if the user prefers dark mode
if (theme === null) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme:)').matches) {
    document.body.classList.add('dark-theme');
    theme = 'dark-theme';
  } else {
    document.body.classList.add('light-theme');
    theme = 'light-theme';
  }
} else {
  // If the user has a saved preference, use that
  document.body.classList.add(theme);
}

// Add event listener to the theme button to toggle theme
const themeBtn = document.querySelectorAll('.theme-btn');

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener('click', function () {
    if (theme === 'light-theme') {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      theme = 'dark-theme';
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      theme = 'light-theme';
    }

    // Save the theme preference to local storage
    localStorage.setItem('theme', theme);

    // Toggle theme button icons
    for (let i = 0; i < themeBtn.length; i++) {
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');
    }
  });
}
