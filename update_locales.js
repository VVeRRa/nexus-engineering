/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const locales = ['cs', 'de', 'es', 'fr', 'pt', 'ua'];
const messagesDir = path.join(process.cwd(), 'src/messages');

const metadata = {
    title: "BLAiT Engineering | Elite IT Staff Augmentation",
    description: "Transform your technical capacity with precision-matched engineering talent. Enterprise-grade IT outsourcing for FinTech, PropTech, and Cloud solutions."
};

locales.forEach(locale => {
    const filePath = path.join(messagesDir, `${locale}.json`);
    if (fs.existsSync(filePath)) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const json = JSON.parse(content);

            if (!json.Metadata) {
                json.Metadata = metadata;
                fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
                console.log(`Updated ${locale}.json`);
            } else {
                console.log(`Metadata already exists in ${locale}.json`);
            }
        } catch (e) {
            console.error(`Error processing ${locale}.json:`, e);
        }
    } else {
        console.warn(`File not found: ${filePath}`);
    }
});
