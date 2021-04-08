const fs = require("fs");

const build_for = "public";

const envs = {
    public: {
        gallery_path: "comp",
        details_path: "comp",
        out_path: "./public"
    },
    low_power: {
        gallery_path: "dith",
        details_path: "comp",
        out_path: "./public/low-power"
    }
};

const img_path = "src/res/img";
const gallery_path = envs[build_for].gallery_path;
const details_path = envs[build_for].details_path;
const build_path = img_path + "/" + gallery_path;
const src_path = "public/" + build_path;
const out_path = envs[build_for].out_path;

const art_names = fs.readdirSync(src_path, {withFileTypes: true}).filter(function(item) {
    return !item.isDirectory();
}).map(function(item) {
    return item.name;
});

if (art_names[0] === ".DS_Store") {
    art_names.shift();
}

const t__pg__showcase = function(img_path) {
    return (
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no" />
                <title>33rpm | deianeira</title>
                
                <link rel="stylesheet" type="text/css" href="${build_for === "low_power" ? "../" : "./"}src/styles/index.css" />
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

                <section>${art_names.map(art_name => `<figure><a href="${build_for === "low_power" ? "../" : "./"}${img_path}/${details_path}/${art_name}" rel="noopener noreferrer" target="_blank"><img src="${build_for === "low_power" ? "../" : "./"}${img_path}/${gallery_path}/${art_name}" loading="lazy" /></a></figure>`).join('')}</section>
            
                <aside>
                    <span><a href="mailto:d@deianeira.co">Is your music in need of a companion?</a></span>
                </aside>

                <footer>
                    ${build_for !== "low_power" ? `<span id="low-power"><a href="./low-power">switch to low power</a></span>` : ""}
                    <div>
                        <span>© MMXXI <a href="https://deianeira.co">Δηϊάνειρα</a></span>
                        <span><a href="https://deianeira.co/elsewhere">elsewhere</a></span>
                        <a href="https://webring.xxiivv.com/" target="_blank" rel="noopener noreferrer">
                            <img id="webring" src="${build_for === "low_power" ? "../" : "./"}src/res/img/webring.svg" alt="xxiivv webring" />
                        </a>
                    </div>
                </footer>
            </body>
        </html>`
    );
}

const write_html_to_file = (write_path, file_name, page_data) => {
    fs.writeFile(`${write_path}/${file_name}`, page_data, error => {
        if (error) {
            throw error;
        }

        console.log(`File created succesfully at ${write_path}/${file_name}`);
    });
};

write_html_to_file(out_path, 'index.html', t__pg__showcase(img_path));
