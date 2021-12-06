import Nodemailer from "nodemailer";

const { 
    
    MAIL_USER,
    MAIL_PASS,
    OWNER_MAIL,

} = process.env;

export default function handler(req, res) {
    
   let { mail, message } = req.query;
   
   try{
    
    Nodemailer.createTransport({
   
           // Proxy config
           service:'gmail',      
   
           // port: PORT,
           port: 465,
           secure: true,
   
           // Mail Config
           auth:{ user:MAIL_USER, pass:MAIL_PASS },
   
    })
    .sendMail({
           from: MAIL_USER, 
           to: OWNER_MAIL,
           subject: 'Aptempt to contact', 
           text: 
           `${mail}, is looking foward to meet with you, this is their message:\n${message}`,
       }, (error, info) => {
           if(!error) { 
               console.log(`Mail sent to : ${info.response}`); 
           } else { 
               console.log('error on mail send', error); 
           }
    });

    res.status(200).Ok();

    }catch(e){
        res.status(404);
    }

}


// If API Gives Error Invalid login: 535-5.7.8 Username and Password not accepted.
//  Allow less secure apps sign in on your mail account