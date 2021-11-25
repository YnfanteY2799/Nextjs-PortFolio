import Nodemailer from "nodemailer"

let mUname = '';

export async function getStaticProps(){
    mUname = process.env.MAIL_USER;
    
}


export default function handler(req, res) {
    const { pid } = req.query
    console.log('mUname', mUname);
    console.log(pid.split(','))
    
    // transp = Nodemailer.createTransport({
    //     service:'gmail',
    //     auth:{
    //         user:'',
    //         pass:''
    //     },
    // });
    // let ttst = {
    //     from:'______@gmail.com', 
    //     to:'testTheFalseMail@gmail.com', 
    //     subject:'testing from my pfolio with nodejs', 
    //     text:'This is a text'
    // };
    // transp.sendMail(ttst, (err, inf) => {
    //     if(!err){
    //         console.log('mail sent : ' + inf.response);
    //     }else {
    //         console.log('error on mail send')
    //         console.log(err)
    //     }
    // });



    res.end(`Post: ${pid}`)
}