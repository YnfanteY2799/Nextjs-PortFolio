

export async function senValidate(object, url, headers){

    console.log(object)


    let sendObj = { 
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        "headers": (
            headers === null ? {
            'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',
            } : headers
        ),
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(object) // body data type must match "Content-Type" header
    
    };

    return await ( await fetch( url, sendObj ) ).json();
}


// Node- Methods {Abstract from front-end}
// export async function sendMail({mail, messag}){

//     try{

//         Nodemailer.createTransport({
    
//             // Proxy config
//             service:'gmail',      
    
//             // port: PORT,
//             port: 465,
//             secure: true,
    
//             // Mail Config
//             auth:{ user:MAIL_USER, pass:MAIL_PASS },
    
//         })
//         .sendMail({
//             from: MAIL_USER, 
//             to: OWNER_MAIL, 
//             subject: 'Aptempt to contact', 
//             text: 
//             `${mail}, is looking foward to meet with you, this is their message:  
//             ${messag}
//             `,
//         }, (error, info) => {
//             if(!error) { 
//                 console.log(`Mail sent to : ${info.response}`); 
//             } else { 
//                 console.log('error on mail send', error); 
//             }
//         });

//     } catch(e){
//         throw new Error(`Error while trying to send email', more detailed error : \n ${e}`);
//     }


// }


// export 