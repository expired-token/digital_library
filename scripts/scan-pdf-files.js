import { readdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicFolderPath = join(__dirname, '../public');

const coursVegPath = join(publicFolderPath, 'cours-veg');
const coursAniPath = join(publicFolderPath, 'cours-ani');
const pfePath = join(publicFolderPath, 'pfe');
const tdPath = join(publicFolderPath, 'td');
const tpPath = join(publicFolderPath, 'tp');


const coursVegPdfFiles = readdirSync(coursVegPath).filter(file => file.endsWith('.pdf')).map(file => {
    return {
        path: `../cours-veg/${file}`,
        title: file.replace(/\.[^/.]+$/, "")
    }
});
const coursAniPdfFiles = readdirSync(coursAniPath).filter(file => file.endsWith('.pdf')).map(file => {
    return {
        path: `../cours-ani/${file}`,
        title: file.replace(/\.[^/.]+$/, "")
    }
});
const pfePdfFiles = readdirSync(pfePath).filter(file => file.endsWith('.pdf')).map(file => {
    return {
        path: `../pfe/${file}`,
        title: file.replace(/\.[^/.]+$/, "")
    }
});
const tdPdfFiles = readdirSync(tdPath).filter(file => file.endsWith('.pdf')).map(file => {
    return {
        path: `../td/${file}`,
        title: file.replace(/\.[^/.]+$/, "")
    }
});
const tpPdfFiles = readdirSync(tpPath).filter(file => file.endsWith('.pdf')).map(file => {
    return {
        path: `../tp/${file}`,
        title: file.replace(/\.[^/.]+$/, "")
    }
});

writeFileSync(join(publicFolderPath, 'pdf-list-veg.json'), JSON.stringify(coursVegPdfFiles, null, 2));
writeFileSync(join(publicFolderPath, 'pdf-list-ani.json'), JSON.stringify(coursAniPdfFiles, null, 2));
writeFileSync(join(publicFolderPath, 'pdf-list-pfe.json'), JSON.stringify(pfePdfFiles, null, 2));
writeFileSync(join(publicFolderPath, 'pdf-list-td.json'), JSON.stringify(tdPdfFiles, null, 2));
writeFileSync(join(publicFolderPath, 'pdf-list-tp.json'), JSON.stringify(tpPdfFiles, null, 2));