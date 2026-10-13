import "./normalize.css";
import "./style.css";
import loadHome from "./hompage.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";


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

    // wipe old content
    const content = document.querySelector('#content');
    content.textContent = '';

    // generate new content
    switch (activeTab.textContent) {
        case 'Home':
            loadHome();
            break;
        case 'Menu':
            loadMenu();
            break;
        case 'About':
            loadAbout();
            break;
    }
});

loadHome();