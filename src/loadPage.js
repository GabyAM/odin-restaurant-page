import { loadHeader } from "./loadHeader.js";

export function loadPage() {
    const $header = loadHeader();
    document.querySelector('#content').appendChild($header);
}