

export async function senValidate(object, url, headers){

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


export function getNotification(message = 'this is supposed to be a Notif/Toast', color = 'w', duration = 5000){



}
