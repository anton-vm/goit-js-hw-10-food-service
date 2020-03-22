import './css/styles.css';
import foodTemplate from './templates/template.hbs';
import menu from './json/menu.json'


const menuItems = {
    menuFood: document.querySelector('.js-menu')
}

function renderMenu (menu) {


    menuItems.menuFood.insertAdjacentHTML('beforeend', foodTemplate(menu))
}

renderMenu(menu)


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const actualTheme = localStorage.getItem('theme');

//   console.log(actualTheme);

const body = document.querySelector('body');
const switcher = document.querySelector('#theme-switch-control')

if (actualTheme === Theme.DARK) {
    switcher.checked = true;
    body.classList.add(Theme.DARK)
}

if (actualTheme === Theme.LIGHT) {
    switcher.checked = false;
    body.classList.add(Theme.LIGHT)
}

function switchTheme (event) {
    if (event.target.checked === true) {
        body.classList.remove(Theme.LIGHT)
        body.classList.add(Theme.DARK)
        localStorage.setItem('theme', Theme.DARK)
        return
    } 
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)
   
    // без else не работает.... или что имеется в виду?
    
}


switcher.addEventListener('change', switchTheme)

