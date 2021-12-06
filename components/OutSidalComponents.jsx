import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { groupBy, structureLinks } from '../public/static/codeDefaults';
import Image from "next/image";
import Link from 'next/link';

// functions 
function IsOk({valid = false}){

    switch(valid){
        case true:
            return <i className="fas fa-check"/>;
        case false:
            return <i className="fas fa-times"/>;
    }

}

async function sendMail({mail, me}){
    return ( await ( await fetch(`api/operationMethods?mail=${mail}&&message=${me}`) ).json());
}

function validateEmail(value){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

// Components 
export function EmailSavingComponent(){

    // In-Form State
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ isValid, setIsValid ] = useState(false);
    
        // Functions
    async function sendData(){ 
        if(isValid && message.length > 1){
            toast.promise(
                sendMail({mail: email, me: message}), {
                pending: 'Sending your mail!',
                success: `Email sent, i'll contanct you as soon as possible!`,
                error: 'Something went wrong with mail handling API'
            });
        } else {
            toast.warning('Please tell me who are you and why should we talk!');
        }
    }


    return (
        <div className="box">
            <div className="columns">
                <div className="column is-6">
                    <label className="label">E-mail</label>
                    <div className="field has-addons">
                        <p className="control is-expanded has-icons-left has-icons-right">
                        
                            <input className={`input is-rounded ${isValid && 'is-success'}`} type="text" 
                            placeholder="Put Your Email Here Please ..."  value={email} 
                            onChange={({target:{value}}) => { setIsValid( validateEmail(value) ); setEmail(value); }}/>
                            
                            <span className="icon is-left"> <i className="fas fa-envelope"/> </span>
                            <span className="icon is-right"> <IsOk valid={isValid}/> </span>                        
                        
                        </p>
                        <p className="control">
                            <a className="button is-info" onClick={sendData}> Submit </a>
                        </p>
                    </div>
                </div>
            
                <div className="column">

                    <div className="field is-horizontal">
                        <div className="field-label">
                            <label className="label">Message</label>
                        </div>

                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <textarea className="textarea is-rounded" value={message} 
                                    onChange={({target:{value}, key}) =>{console.log(`the key is : ${key} ${'the value is : '}` + value) ;setMessage(value)}}
                                    placeholder="Write here what you want me to know before we meet"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <ToastContainer
                    theme="dark"     
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </div>
        </div>
    );
}

export function SocialContacts({ renderingBadges = [] }){

    renderingBadges = structureLinks(renderingBadges);
    renderingBadges = groupBy(renderingBadges, 'type');
    let keys = Object.keys(renderingBadges);
    console.log(renderingBadges[keys[0]])

    return (       
        <div className="box">
            {keys.map((x,i) => 
                <div className="columns" key={i}>
                    {renderingBadges[x].map(({baseLink, custoMoji}, ind) => {
                        console.log(custoMoji)
                        return(
                            <div className="colum" key={ind}>
                                <Link href={`${baseLink}`}>
                                    <a className="button">
                                        <Image src={(custoMoji??'/loading.gif')} alt={(custoMoji??'/loading.gif')} width="100" height="100"/>
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                )
            })
        </div>
    );
}

export function HeroFooter({options = [] , activetab = 0, tabSetter }){
    return( 
    <> 
        <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
                <div className="container">
                    <ul>
                        {options.map(({name, moji},i) => 
                        <li className={activetab === i ? "is-active" : ""} key={i} onClick={() => tabSetter(i)}>
                            <a>
                                <span className="icon is-small">
                                    <i className={moji} aria-hidden="true"/>
                                </span>
                                <span>{name}</span>
                            </a>
                        </li>)}
                    </ul>
                </div>
            </nav>
        </div>
    </>
    );
}
