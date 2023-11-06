import { loadPage } from "./loadPage.js";
import { loadMenu } from "./loadMenu.js";
import { loadContact } from "./loadContact.js"; 

function createHeaderLink(linkFunction) {
    const $link = document.createElement('a');
    $link.href = '#';
    $link.addEventListener('click', () => {
        document.querySelector('#content').innerHTML = '';
        linkFunction()
    })
    return $link;
}

export function loadHeader() {
    const $header = document.createElement('header');

    const $headerTitle = document.createElement('h1');
    $headerTitle.textContent = 'The Krusty Krab';

    const $homeLink = createHeaderLink(loadPage);
    $homeLink.textContent = 'Home';
    const $menuLink = createHeaderLink(loadMenu);
    $menuLink.textContent = 'Menu';
    const $contactLink = createHeaderLink(loadContact);
    $contactLink.textContent = 'Contact';

    $header.appendChild($headerTitle);
    $header.appendChild($homeLink);
    $header.appendChild($menuLink);
    $header.appendChild($contactLink);
    return $header
}