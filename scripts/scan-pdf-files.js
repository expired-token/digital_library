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
        title: file
    }
});
const coursAniPdfFiles = readdirSync(coursAniPath).filter(file => file.endsWith('.pdf')).map(file => {
    return {
        path: `../cours-ani/${file}`,
        title: file
    }
});
const pfePdfFiles = readdirSync(pfePath).filter(file => file.endsWith('.pdf')).map(file => {
    return {
        path: `../pfe/${file}`,
        title: file
    }
});
const tdPdfFiles = readdirSync(tdPath).filter(file => file.endsWith('.pdf')).map(file => {
    return {
        path: `../td/${file}`,
        title: file
    }
});
const tpPdfFiles = readdirSync(tpPath).filter(file => file.endsWith('.pdf')).map(file => {
    return {
        path: `../tp/${file}`,
        title: file
    }
});

writeFileSync(join(publicFolderPath, 'pdf-list-veg.json'), JSON.stringify(coursVegPdfFiles));
writeFileSync(join(publicFolderPath, 'pdf-list-ani.json'), JSON.stringify(coursAniPdfFiles));
writeFileSync(join(publicFolderPath, 'pdf-list-pfe.json'), JSON.stringify(pfePdfFiles));
writeFileSync(join(publicFolderPath, 'pdf-list-td.json'), JSON.stringify(tdPdfFiles));
writeFileSync(join(publicFolderPath, 'pdf-list-tp.json'), JSON.stringify(tpPdfFiles));