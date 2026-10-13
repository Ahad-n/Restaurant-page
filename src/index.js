import "./normalize.css";
import "./style.css";
import loadHome from "./hompage.js";
import loadMenu from "./menu.js";
import loadAbout from "./hompage.js";


// style active tabs
const nav = document.querySelector('nav');
nav.addEventListener('click', event => {
    // clear old highlighted tab
    const tabs = document.querySelectorAll('button');
    tabs.forEach(tab => {
        if (tab.matches('.highlight-tab')) tab.classList.toggle('highlight-tab'); 
    });

    // highlight current active tab
    const activeTab = event.target;
    activeTab.classList.toggle('highlight-tab');
});






loadAbout();