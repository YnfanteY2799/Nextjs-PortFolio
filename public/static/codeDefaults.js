var codeDefaultNhen = `import confetti from 'https://cdn.skypack.dev/canvas-confetti';
// import nhenwsapi from 'nhentai-websrcrapping-api';
// Test Here the methods in NhenAPI
console.log("Getting it up and hard");
`;

function groupBy(array = [], prop = ''){
    let arr = [... new Set(array.map(x => x[prop]))]
    let rObject = {};
    for(let i = 0; i < arr.length; i++){
        rObject[arr[i]] = array.filter(x => x[prop] === arr[i]);
    }
    return rObject;
}

function getSocialShieldbadges(nWork = ''){
    nWork = nWork.toLowerCase();
    switch(nWork){
        case 'g':
            // Github
            return 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white';
        case 'cw':
            // Codewars
            return "https://img.shields.io/badge/Codewars-000000?style=for-the-badge&logo=codewars&logoColor=red";
        case 'fb':
            // Facebook
            return "https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white";
        case 'rtt':
            // Reddit
            return "https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white";
        case 'tw':
            // Twitter
            return "https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white";
        case 'ig':
            // Instagram
            return "https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white";
        case 'tg':
            // telegram
            return "https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white";
        case 'cdp':
            // Codepen
            return "https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white";
        case 'ws':
            // Whatsapp
            return "https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white";
        case 'gl':
            // Gitlab
            return "https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white";
        case 'msg':
            // messenger
            return "https://img.shields.io/badge/Messenger-00B2FF?style=for-the-badge&logo=messenger&logoColor=white";
        case 'otl':
            // outlook
            return "https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white";
        case 'slk':
            // slack
            return "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white";
        case 'dsk':
            // discord
            return "https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white";
        case 'tms':
            // Teams
            return "https://img.shields.io/badge/Microsoft_Teams-6264A7?style=for-the-badge&logo=microsoft-teams&logoColor=white";
        case 'g+':
            // google+
            return "https://img.shields.io/badge/google+-000000?style=for-the-badge&logo=google&logoColor=red";
        case 'pts':
            // pinterest
            return "https://img.shields.io/badge/pinterest-000000?style=for-the-badge&logo=pinterest&logoColor=red";
        case 'sow':
            // Stack Overflow
            return "https://img.shields.io/badge/Stack%20Overflow-000000?style=for-the-badge&logo=stackoverflow&logoColor=orange";
        case 'ttk':
            // Tik-Tok
            return "https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white";
        case 'xda':
            // xda-developers
            return "https://img.shields.io/badge/XDA_Developers-F59812?style=for-the-badge&logo=xda-developers&logoColor=white";
        case 'gp':
            // google-play
            return "https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white";
        case 'aps':
            // App-store
            return "https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white";
        case 'med':
            // medium
            return "https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white";
        case 'devt':
            // Dev.to
            return "https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white";
        case 'yt':
            // Youtube
            return "https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white";
        case 'twc':
            // Twitch
            return "https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white";
        case 'gml':
            // Gmail
            return "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white";
        case 'fgm':
            // Facebook-gaming
            return "https://img.shields.io/badge/Facebook_Gaming-005FED?style=for-the-badge&logo=facebook-gaming&logoColor=white";
        case 'lkd':
            // linkedin
            return "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white";
        default :
            return '/loading-25.gif';
    }
}

function structureLinks(links = []){
    return links.map(x => {
        x = x.split(";");
        return x[0] !== 'null' && {
            baseLink:x[0],
            customMoji:getSocialShieldbadges(x[1]),
            type:x[2],
        };
    }).filter(x => x !== false);
}

const socialLinks = [
    'https://www.codewars.com/users/Nobu-Nobu;cw;social',
    'https://github.com/YnfanteY2799;g;social',
    'https://www.linkedin.com/in/yassett-jose-ynfante-jimenez-7b7304153/;lkd;work',
    'https://twitter.com/kenjid3v;tw;social',
    'null;null;null',
];



export {
    codeDefaultNhen,
    getSocialShieldbadges,
    structureLinks,
    groupBy,
    socialLinks,
};