// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const input = document.querySelector(".theme-switcher__input");

input.addEventListener("change", (e) => {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
});

let theme = localStorage.getItem('data-theme');
const changeThemeToDark = () => {
    document.body.setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
}

const changeThemeToLight = () => {
    document.body.setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", 'light')
}

