import './css/styles.css';
import foodTemplate from './templates/template.hbs';
import menu from './json/menu.json'


const menuItems = {
    menuFood: document.querySelector('.js-menu')
}

function renderMenu (menu) {
    const menuConstruct = menu.map(el => foodTemplate(el)).join('');
    menuItems.menuFood.insertAdjacentHTML('beforeend', menuConstruct)
}
renderMenu(menu)


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const actualTheme = localStorage.getItem('theme');

  console.log(actualTheme);

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
    } else {
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)
    }
}

switcher.addEventListener('change', switchTheme)

