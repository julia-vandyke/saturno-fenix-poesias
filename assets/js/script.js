'use strict';

// variaveis da navbar
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// função de navtoggle
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// Checa se a preferencia de tema ja esta salva no local storage
let theme = localStorage.getItem('theme');

// Se não esta salvo, checa se o usuario prefere o modo escuro
if (theme === null) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme:)').matches) {
    document.body.classList.add('dark-theme');
    theme = 'dark-theme';
  } else {
    document.body.classList.add('light-theme');
    theme = 'light-theme';
  }
} else {
  // Se o usuario tem uma preferencia salva, o site usa esta
  document.body.classList.add(theme);
}

// Adiciona um event listener para o botão de mudar o tema
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

    // Salva a prefrencia no local storage
    localStorage.setItem('theme', theme);

    // Tema dos botões de mudar o tema
    for (let i = 0; i < themeBtn.length; i++) {
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');
    }
  });
}
