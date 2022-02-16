import i18Obj from './translate.js';


let ifCurrentThemeLight = document.querySelectorAll('.light-theme')
console.log(ifCurrentThemeLight)

document.addEventListener('DOMContentLoaded', function() {
    let burger = document.getElementById('burger');
    let menu = document.getElementById('menu');
    burger.addEventListener('click', function() {
        burger.classList.toggle('open');
        menu.classList.toggle('nav-opened');
    })
})

const closeMenu = function() {
    burger.classList.remove('open');
    menu.classList.remove('nav-opened');
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

const portfolioBtnWinter = document.querySelector('.portfolio-btn-winter');
const portfolioBtnSpring = document.querySelector('.portfolio-btn-spring');
const portfolioBtnSummer = document.querySelector('.portfolio-btn-summer');
const portfolioBtnAutumn = document.querySelector('.portfolio-btn-autumn');

const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtns = document.querySelectorAll('.portfolio-btn');

const resetAllPortfolioBtns = function () {
    portfolioBtns.forEach((el) => { el.classList.remove('button-gld')});
    portfolioBtns.forEach((el) => { el.classList.add('button-trn')});
}

const addGldClass = function(targetButton){
    targetButton.classList.remove('button-trn');
    targetButton.classList.add('button-gld');
}


portfolioBtnWinter.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
    resetAllPortfolioBtns();
    addGldClass(portfolioBtnWinter);
 });

portfolioBtnSpring.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
    resetAllPortfolioBtns()
    addGldClass(portfolioBtnSpring);
 });

portfolioBtnSummer.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`)
    resetAllPortfolioBtns()
    addGldClass(portfolioBtnSummer);
 });

 portfolioBtnAutumn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`)
    resetAllPortfolioBtns()
    addGldClass(portfolioBtnAutumn);
 });

// ---------- images caches  -----------
function preloadSummerImages(folderName) {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${folderName}/${i}.jpg`;
    }
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];

  seasons.forEach( el => preloadSummerImages(el))
// ---------- images caches  -----------

// ------------ translate start------------
let lang = 'en';
let theme = 'dark';

const ruBtn = document.querySelector('.ru-btn');
const enBtn = document.querySelector('.en-btn');



function getTranslate(langParam) {
    const translatedText = document.querySelectorAll('[data-i18]');
    translatedText.forEach(el=>el.textContent=i18Obj[langParam][el.dataset.i18])
    if (langParam=='ru') {
        enBtn.classList.remove('lang-item-active')
        ruBtn.classList.add('lang-item-active')
        lang = 'ru'  
    } else if ( langParam == 'en' ) {
        ruBtn.classList.remove('lang-item-active')
        enBtn.classList.add('lang-item-active')
        lang = 'en'
    }

};

ruBtn.addEventListener('click', () => {
    getTranslate('ru')
})

enBtn.addEventListener('click', () => {
    getTranslate('en')
})
     

// ------------ translate end ------------

// ------------- theme change start -------------
const themeChangeableItems = document.querySelectorAll('.theme-changeable')
const themeBtn = document.querySelector('.theme-btn')

let ThemeSwitcher = function (){
    themeChangeableItems.forEach(el=>el.classList.toggle('light-theme'));
    themeBtn.classList.toggle('theme-btn__moon')
    if (theme == 'dark') {theme = 'light'} 
    else if (theme == 'light') {theme = 'dark'}
}

let LightThemeSwitchOn = function () {
    themeChangeableItems.forEach(el=>el.classList.add('light-theme'));
    themeBtn.classList.add('theme-btn__moon')
    theme = 'light'
}

// console.log(themeChangeableItems)
themeBtn.addEventListener('click', () => {
    ThemeSwitcher();
})


// ------------- theme change end -------------

// -------------- local storage start ---------------
// ------ save local storage
function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
  }
  window.addEventListener('beforeunload', setLocalStorage)

// ------ load local storage



function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang');
      getTranslate(lang);
    }

    if( (localStorage.getItem('theme') == 'light')) {
        theme = localStorage.getItem('theme');
        LightThemeSwitchOn();
      }

  }
  window.addEventListener('load', getLocalStorage)

// -------------- local storage end ---------------

// -------------- button addition effect start ---------------

const buttons = document.querySelectorAll('.ripple')

console.log(buttons)

buttons.forEach(el=> { el.addEventListener('click', function (e) {
    // const x = e.clientX
    // const y = e.clientY
  
    // const x = e.offsetLeft
    // const y = e.offsetTop 

    const x = e.target.offsetLeft
    const y = e.target.offsetTop 

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
  
    const xInside = x - buttonLeft
    const yInside = y - buttonTop
  
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'
  
    this.appendChild(circle)
  
    setTimeout(() => circle.remove(), 500)
  })
}
  )


// -------------- button addition effect end  ---------------




//==================================
//============ codewars ============
//==================================
//
