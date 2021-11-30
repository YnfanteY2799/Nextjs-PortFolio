import { useState, lazy } from "react";
import { AppBar, Hero } from "../components/NavigationComponents.jsx";
import { senMail } from "../Hooks/reusableFunctions.js";
import { ToastContainer, toast } from "react-toastify"; 
import Image from "next/image";

// Constants
const title = "Did you liked one of my projects ?";
const description = "Would you like us to meet up and chat ?";
const options = [
    {name:"Email-Me", moji:"far fa-envelope", Component: <EmailSavingComponent/> },
    {name:"Contact-Me (Social Networks)", moji:"fab fa-telegram-plane", Component: <SocialContacts/> }
];

// In Component Functional-Components
function HeroFooter({options = [] , activetab = 0, tabSetter }){
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

// Optioned Components 
function EmailSavingComponent(){

    // In-Form State
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ isValid, setIsValid ] = useState(false);
    
        // Functions
    async function sendData(){ 
        if(isValid && message.length > 1){
            toast.promise(
                sendMail({mail: email, me: message}), {
                pending: 'Saving your mail!',
                success: `Email Saved, i'll contanct you as soon as possible!`,
                error: 'Something went wrong with mail handling API'
            });
        } else {
            toast.warning('Please tell me who are you and why should we talk!');
        }
    }


    return (
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
    );
}

function SocialContacts(){

    return (

        <div className="box">
            
            <Image src={"/codewars.svg"} width="400" height="100" alt="codewars-props"/>

        
        </div>
    );
}


// In Component Functions
function validateEmail(value){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

// Base - Component
export default function Contact(){
    
    // Upper-State
    const [ activeOption, setActiveOption ] = useState(0);

    return(
        <>
            <AppBar/>

            <Hero color="black" title={title} 
            description={description} size="sh" 
            foot={
                <HeroFooter activetab={activeOption} tabSetter={setActiveOption} options={options} />
            }
            />

            <div className="container is-heroed-tab">
                {options.map(({Component},i) => 
                <div key={i} style={{display: activeOption === i ? "block" : "none"}}>
                    {Component}
                </div>
                )}
            </div>
        </>
    );
}