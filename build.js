const fs = require('fs');

const artFilePath = './src/res/img/art-compressed/';
const artFileNames = fs.readdirSync(artFilePath, {withFileTypes: true}).filter(item => !item.isDirectory()).map(item => item.name);

const htmlString =
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no">
        <title>deianeira</title>
        
        <link rel="stylesheet" type="text/css" href="../src/styles/index.css" />
    </head>
    
    <body>
        <a id="top"></a>

        <header>
            <a href="#top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.17 61.9" width="82.17px">
                    <circle cx="30.95" cy="30.95" r="30.6"/>
                    <circle cx="51.22" cy="30.95" r="30.6"/>
                    <circle cx="51.22" cy="30.95" r="10.13"/>
                    <circle cx="30.95" cy="30.95" r="10.13"/>
                    <circle cx="41.08" cy="30.95" r="30.6"/>
                    <circle cx="41.08" cy="30.95" r="10.13"/>
                </svg>
            </a>

            <span>Have a project? I want to work with you: <a href="mailto:d@deianeira.co">d@deianeira.co</a></span>
        </header>

        <section>${artFileNames ? artFileNames.map(artFileName => `<figure><a href="../${artFilePath}${artFileName}" rel="noopener noreferrer" target="_blank"><img src="../${artFilePath}${artFileName}" loading="lazy" /></a></figure>`).join('') : ''}</section>
    </body>
</html>`;

const writeHTMLToFile = (writePath, fileName, pageData) => {
    const datedFileName = `${Date.now()}-${fileName}`;

    fs.writeFile(`${writePath}/${datedFileName}`, pageData, error => {
        if (error) {
            throw error;
        }

        console.log(`File created succesfully at ${writePath}/${datedFileName}`);
    });
};

writeHTMLToFile('./build', 'index.html', htmlString);
