const fs = require("fs");

const art_path = "./src/res/img/art-comp";

const art_names = fs.readdirSync(art_path, {withFileTypes: true}).filter(function(item) {
    return !item.isDirectory();
}).map(function(item) {
    return item.name;
});

if (art_names[0] === ".DS_Store") {
    art_names.shift();
}

const t__pg__showcase =
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no" />
        <title>33rpm | deianeira</title>
        
        <link rel="stylesheet" type="text/css" href="../src/styles/index.css" />
    </head>
    
    <body>
        <a id="top"></a>

        <header>
            <a href="#top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.17 61.9" width="82.17px">
                    <circle cx="30.95" cy="30.95" r="30.6" />
                    <circle cx="51.22" cy="30.95" r="30.6" />
                    <circle cx="51.22" cy="30.95" r="10.13" />
                    <circle cx="30.95" cy="30.95" r="10.13" />
                    <circle cx="41.08" cy="30.95" r="30.6" />
                    <circle cx="41.08" cy="30.95" r="10.13" />
                </svg>
            </a>

            <span><a href="mailto:d@deianeira.co">d@deianeira.co</a></span>
        </header>

        <section>${art_names.map(art_name => `<figure><a href="../${art_path}/${art_name}" rel="noopener noreferrer" target="_blank"><img src="../${art_path}/${art_name}" loading="lazy" /></a></figure>`).join('')}</section>
    
        <footer>
            <span>© MMXXI <a href="https://deianeira.co">Δηϊάνειρα</a>
            <span><a href="https://deianeira.co/elsewhere">elsewhere</a>
            <a href="https://webring.xxiivv.com/" target="_blank" rel="noopener noreferrer">
                <img id="webring" src="../src/res/img/webring.svg" alt="xxiivv webring" />
            </a>
        </footer>
    </body>
</html>`;

const write_html_to_file = (write_path, file_name, page_data) => {
    const dated_file_name = `${Date.now()}-${file_name}`;

    fs.writeFile(`${write_path}/${dated_file_name}`, page_data, error => {
        if (error) {
            throw error;
        }

        console.log(`File created succesfully at ${write_path}/${dated_file_name}`);
    });
};

write_html_to_file('./public', 'index.html', t__pg__showcase);
