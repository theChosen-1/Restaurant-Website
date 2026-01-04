import './style.css';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';

function initializeEventListners() {
    const homeBtn = document.querySelector('.home');
    const menuBtn = document.querySelector('.menu');
    const contactBtn = document.querySelector('.contact');

    homeBtn.addEventListener('click', () => {
        loadHome();
    });

    menuBtn.addEventListener('click', () => {
        loadMenu();
    });

    contactBtn.addEventListener('click', () => {
        loadContact();
    });
}

initializeEventListners();
loadHome();