const fs = require('fs');
const http = require('http');

// IMMF for creating SVG
(async () => {
    try{
        console.log("Im supposed to be running");
        
        let env = fs.readFileSync('./.env.local', 'utf-8');
        env = env.split('\n').find(x => x.includes("SVG")).split('=')[1].split(';');
        console.log(env)
        // http.get('')
        



    }catch(e){
        throw Error(e);
    }


})()