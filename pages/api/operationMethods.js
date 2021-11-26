import Nodemailer from "nodemailer";

export default function handler(req, res) {
    
    const { pid } = req.query;
    
    const { 
        MAIL_USER, 
        MAIL_PASS,
        HOST,
        PROXY,
        PORT,
    } = process.env;

    let ttst = {
        from:MAIL_USER, 
        to:pid, 
        subject:'testing from my pfolio with nodejs', 
        text:'This is a text'
    };

    Nodemailer.createTransport({

        // Proxy config-
        host:HOST,
        port:PORT,
        secure:true,
        proxy:PROXY,

        // Mail Config
        service:'gmail', 
        auth:{ user:MAIL_USER, pass:MAIL_PASS }, 

    }).sendMail(ttst, (err, inf) => {
        if(!err){
            console.log('mail sent : ' + inf.response);
        }else {
            console.log('error on mail send');
            console.log(err);
        }
    });



    res.end(`Post: ${pid}`)
}