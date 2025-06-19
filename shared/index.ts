/* --- Global definition of used routes --- */
// import {fileURLToPath} from "url";

export let itemRoute: Map<string, string> = new Map<string, string>();

itemRoute.set("accueil", "/");
itemRoute.set("courses", "../courses");
itemRoute.set("tp", "../tp");
itemRoute.set("td", "../td");
itemRoute.set("pfe", "../pfe");

/*export default {
    alias: {
        'images': fileURLToPath(new URL('../assets/img', import.meta.url)),
        'courses': fileURLToPath(new URL('../pages/courses', import.meta.url)),
    }
}*/

/* --- Interfaces --- */
declare global {

    interface CardItem {
        title: string;
        type: 'file' | 'section';
        route?: string;
        background?: string;
    }

    interface RadioItem {
        name: string;
        value: string;
    }
}

