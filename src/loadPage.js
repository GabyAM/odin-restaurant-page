import { loadHeader } from "./loadHeader.js";
import { loadHome } from "./loadHome.js";

export function loadPage() {
    loadHeader();
    loadHome();
}