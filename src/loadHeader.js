import { loadHome } from "./loadHome.js";
import { loadMenu } from "./loadMenu.js";
import { loadContact } from "./loadContact.js";
import logo from './images/logo.png'

function createHeaderLink(linkFunction) {
    const $link = document.createElement('a');
    $link.href = '#';
    $link.addEventListener('click', (event) => {
        document.querySelector('#content').innerHTML = '';
        linkFunction()
        event.preventDefault()
    })
    return $link;
}

export function loadHeader() {
    const $header = document.createElement('header');

    const $logo = document.createElement('img');
    $logo.src = logo;
    console.log($logo.src)

    const $homeLink = createHeaderLink(loadHome);
    $homeLink.textContent = 'Home';
    const $menuLink = createHeaderLink(loadMenu);
    $menuLink.textContent = 'Menu';
    const $contactLink = createHeaderLink(loadContact);
    $contactLink.textContent = 'Contact';

    const $linksContainer = document.createElement('div');

    $linksContainer.appendChild($homeLink);
    $linksContainer.appendChild($menuLink);
    $linksContainer.appendChild($contactLink);
    $header.appendChild($logo);
    $header.appendChild($linksContainer);
    
    const $contentContainer = document.querySelector('#content-container');
    document.querySelector('body').insertBefore($header, $contentContainer);
}