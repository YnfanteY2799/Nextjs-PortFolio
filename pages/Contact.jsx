import { useState } from "react";
import { AppBar, Hero } from "../components/NavigationComponents.jsx";
import { senValidate } from "../Hooks/reusableFunctions.js";

// In Component Functional-Components
function HeroFooter({ }){


    return( 
    <> 
        <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
                <div className="container">
                    <ul>
                        <li className="is-active">
                            <a>
                                <span className="icon is-small">
                                    <i className="far fa-envelope" aria-hidden="true"/>
                                </span>
                                <span>Email-Me</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className="icon is-small">
                                    <i className="fab fa-telegram-plane" aria-hidden="true"/>
                                </span>
                                <span>Contact-Me (Social Networks)</span>
                            </a>
                        </li>
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


function callNoti(e){

}

// In Component Functions
function validateEmail(value){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

// Component
export default function Contact(){
    
    // Constants
    const title = "Did you liked one of my projects ?";
    const description = "Would you like us to meet up and chat ?";

    // Forms
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ notification, setNotification ] = useState(true);
    const [ isValid, setIsValid ] = useState(false);

    // Functions
    async function sendData(){
        
        callNoti(true);
        if(isValid && message.length > 1){
            await senValidate( {email:email, mes:message}, '' );
        }else {
            setNotification({name:true});
            console.log(notification)
        }
    }

    return(
        <>
            <AppBar/>
            <Hero color="black" title={title} description={description} size="sh" foot={<HeroFooter />}/>
            <div className="container is-heroed-tab">
                <div className="columns">
                    
                    <div className="column is-6">
                        <label className="label">E-mail</label>
                        <div className="field has-addons">
                            <p className="control is-expanded has-icons-left has-icons-right">
                            
                                <input className={`input is-rounded ${isValid && 'is-success'}`} type="text" 
                                placeholder="Put Your Email Here Please ..."  value={email} 
                                onChange={({target:{value}}) =>{ setIsValid(validateEmail(value)); setEmail(value); }}/>
                                
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
                                        onChange={({target:{value}}) => setMessage(value)}
                                        placeholder="Write here what you want me to know before we meet"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <Notification show={notification} setShow={() => setNotification(!notification)}/> */}

                </div>
            </div>
        </>
    );
}