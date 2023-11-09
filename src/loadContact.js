import './contact.css'
import bikiniBottom from './images/bikinibottom.png'

function createSocialLink (social) {
    const $listElement = document.createElement('li');
    const $icon = document.createElement('iconify-icon');
    $icon.icon = `mdi:${social.toLowerCase()}`
    const $socialLink = document.createElement('a');
    $socialLink.textContent = social;
    $socialLink.href = '#';

    $listElement.appendChild($icon);
    $listElement.appendChild($socialLink);

    return $listElement;
}

export function loadContact() {
    const $textContainer = document.createElement('div');
    $textContainer.className = 'contact-text-container';
    const $callToActionText = document.createElement('p');
    $callToActionText.textContent = "Join us at the Krusty Krab and make every meal an adventure! Whether you're celebrating with friends, bringing the family, or just seeking a taste of Bikini Bottom's finest, the Krusty Krab is the place to be. Dive into a world of flavor, fun, and fantastic memories.Don't miss out on the Krusty Krab experience – come visit us today!"
    $callToActionText.className = 'contact-text';
    $textContainer.appendChild($callToActionText);

    const $contact = document.createElement('div');
    $contact.className = 'contact';

    const $locationContainer = document.createElement('div');
    $locationContainer.className = 'location';
    const $locationTitle = document.createElement('h3');
    $locationTitle.textContent = 'Location';
    const $locationDescription = document.createElement('p');
    $locationDescription.textContent = "Bikini Bottom, right next to the Krusty Krab sign – you can't miss it!"
    const $locationImage = document.createElement('img');
    $locationImage.src = bikiniBottom;

    $locationContainer.appendChild($locationTitle);
    $locationContainer.appendChild($locationDescription);
    $locationContainer.appendChild($locationImage);

    const $social = document.createElement('div');
    $social.className = 'social';
    const $socialTitle = document.createElement('h3');
    $socialTitle.textContent = 'Social Media';
    const $socialDescription = document.createElement('p');
    $socialDescription.textContent = 'Follow us on social media for the latest updates and special offers!';

    const $socialLinks = document.createElement('ul');
    const $twitterLink = createSocialLink('Twitter');
    const $instagramLink = createSocialLink('Instagram');
    const $facebookLink = createSocialLink('Facebook');
    $socialLinks.appendChild($twitterLink);
    $socialLinks.appendChild($instagramLink);
    $socialLinks.appendChild($facebookLink);

    $social.appendChild($socialTitle);
    $social.appendChild($socialDescription);
    $social.appendChild($socialLinks);


    $contact.appendChild($locationContainer);
    $contact.appendChild($social);

    const $content = document.querySelector('#content');
    $content.appendChild($textContainer);
    $content.appendChild($contact);
}