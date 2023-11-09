import krabbyPatty from './images/krabbypatty.png'
import kelpFries from './images/kelpfries.png'
import seafoamSoda from './images/seafoamsoda.jfif'
import './menu.css'

function createMenuItem(title, description, imageSource) {
    const $container = document.createElement('div');
    $container.className = 'menu-item';

    const $itemTitle = document.createElement('h3');
    $itemTitle.textContent = title;

    const $itemImage = document.createElement('img');
    $itemImage.src = imageSource;

    const $itemDescription = document.createElement('p');
    $itemDescription.textContent = description;

    $container.appendChild($itemTitle);
    $container.appendChild($itemImage);
    $container.appendChild($itemDescription);
    return $container;
}

export function loadMenu() {
    const $title = document.createElement('h1');
    $title.textContent = 'Menu Highlights'
    
    const $krabbyPatty = createMenuItem('Krabby Patty', 'The classic and mouthwatering delight that put the Krusty Krab on the map.', krabbyPatty);
    const $kelpFries = createMenuItem('Kelp Fries', 'Crispy, golden perfection that pairs perfectly with our patties.', kelpFries);
    const $seafoamSoda = createMenuItem('Seafoam Soda', "A fizzy, refreshing beverage straight from the ocean's depths.", seafoamSoda);
    
    const $content = document.querySelector('#content');
    $content.appendChild($title);
    $content.appendChild($krabbyPatty);
    $content.appendChild($kelpFries);
    $content.appendChild($seafoamSoda);
}