export function loadMenu() {
    const $menu = document.createElement('p');
    $menu.textContent = "Menu Highlights: 🍔 Krabby Patty: The classic and mouthwatering delight that put the Krusty Krab on the map.🍟 Krusty Fries: Crispy, golden perfection that pairs perfectly with our patties.🌊 Seafoam Soda: A fizzy, refreshing beverage straight from the ocean's depths.🍔🍟🍔Join us at the Krusty Krab and make every meal an adventure! Whether you're celebrating with friends, bringing the family, or just seeking a taste of Bikini Bottom's finest, the Krusty Krab is the place to be. Dive into a world of flavor, fun, and fantastic memories.Don't miss out on the Krusty Krab experience – come visit us today!"
    document.querySelector('#content').appendChild($menu);
}