import Nodemailer from "nodemailer";

const { 
    
    MAIL_USER,
    MAIL_PASS,
    HOST,
    PROXY,
    PORT,

} = process.env;

export default function handler(req, res) {
    
    const { mail } = req.query;

    Nodemailer.createTransport({

        // Proxy config
        // host: HOST,
        host: 'smtp.gmail.com',
        
        // port: PORT,
        port: 465,
        secure: true,
        proxy: PROXY,

        // Mail Config
        auth:{ user:MAIL_USER, pass:MAIL_PASS },

    })
    .sendMail({
        from: MAIL_USER, 
        to: mail, 
        subject: 'testing from my pfolio with nodejs', 
        text: 'This is a text',
    }, (error, info) => {
        if(!error) { 
            console.log(`Mail sent to : ${info.response}`); 
        } else { 
            console.log('error on mail send', error); 
        }
    });

    res.end(`Posted email is : ${mail}`);
}