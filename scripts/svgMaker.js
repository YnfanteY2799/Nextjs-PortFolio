const fs = require('fs');
const { get } = require('https');

// NOT USABLE YET, Need To Think of it better
// this goes to package.json once this method works as it should "create_svg": "node ./scripts/svgMaker.js",

// IMMF for creating SVG
(() => {
    try{
        console.log("Im supposed to be running");
        
        let env = fs.readFileSync('./.env.local', 'utf-8');
        env = env.split('\n').find(x => x.includes("SVG")).split('=')[1].split(';');
        
        get('https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white', (r) => {

            r.setEncoding('utf8');
            r.on('data', (chunk) => { 
                let fls = fs.createReadStream('.\\public\\test_svg.svg');
                // chunk.pipe(fls)
                fls.on('error', (error) => console.log(error));
                fls.on('finish', () => console.log(`Finished With`));
                
            
            });
        });
        



    }catch(e){
        throw Error(e);
    }


})()