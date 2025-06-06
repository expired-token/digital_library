/* --- Global definition of used routes --- */
export let itemRoute: Map<string, string> = new Map<string, string>();

itemRoute.set("accueil", "/");
itemRoute.set("courses", "../courses");
itemRoute.set("tp", "../tp");
itemRoute.set("td", "../td");
itemRoute.set("pfe", "../pfe");

/* --- Interfaces --- */
declare global {

    interface CardItem {
        title: string;
        type: 'file' | 'section';
        route?: string;
        background?: string;
    }
}

