import krustyKrab from './images/krustykrab.png'
import './home.css'

function createInformationSection(title, text) {
    const $container = document.createElement('div');
    $container.className = 'home-info-section';
    const $title = document.createElement('h3');
    $title.textContent = title
    const $text = document.createElement('p');
    $text.textContent = text;

    $container.appendChild($title);
    $container.appendChild($text);
    return $container;
}

export function loadHome() {
    const $main = document.createElement('div');
    $main.className = 'home-main';

    const $title = document.createElement('h1');
    $title.textContent = "Introducing the Krusty Krab: Bikini Bottom's Culinary Gem!"

    const $infoContainer = document.createElement('div');
    $infoContainer.className = 'home-main-info';

    const $image = document.createElement('img');
    $image.src = krustyKrab;
    $image.className = 'krusty-krab';

    const $paragraph = document.createElement('p');
    $paragraph.textContent = "Dive into the deep blue sea and discover the culinary wonderland that is the Krusty Krab! Nestled in the heart of Bikini Bottom, this iconic restaurant offers a dining experience like no other. With a menu curated by the one and only Eugene H. Krabs, the Krusty Krab is the ultimate destination for seafood lovers and landlubbers alike."
    
    const $content = document.querySelector('#content');
    $infoContainer.appendChild($image);
    $infoContainer.appendChild($paragraph);
    $main.appendChild($title);
    $main.appendChild($infoContainer);
    $content.appendChild($main)



    const $secondary = document.createElement('div');
    $secondary.className = 'home-secondary';
    const $secondTitle = document.createElement('h3');
    $secondTitle.textContent = 'Why choose the Krusty Krab?';

    const $secondInfoContainer = document.createElement('div');
    $secondInfoContainer.className = 'home-secondary-info';

    const $firstSection = createInformationSection('Unrivaled Flavor', 'Our Krabby Patties are the stuff of legends! Each succulent patty is made from a secret formula, ensuring a taste sensation that will have you coming back for more.')
    $firstSection.style.backgroundColor = '#edaf43';
    const $secondSection = createInformationSection('Friendly Staff', "Our dedicated and friendly team is always ready to welcome you with a smile. Whether you're a Krabby Patty connoisseur or a first-time visitor, you'll feel right at home.")
    $secondSection.style.backgroundColor = '#3680be';
    const $thirdSection = createInformationSection('Underwater Ambiance', "Dive into an immersive oceanic atmosphere with our nautical-themed decor, complete with portholes and shipwrecked artifacts. It's like dining under the sea!")
    $thirdSection.style.backgroundColor = '#a51424';

    $secondInfoContainer.appendChild($firstSection);
    $secondInfoContainer.appendChild($secondSection);
    $secondInfoContainer.appendChild($thirdSection);

    $secondary.appendChild($secondTitle);
    $secondary.appendChild($secondInfoContainer);
    $content.appendChild($secondary);
}