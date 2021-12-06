import { useState } from "react";
import { AppBar, Hero } from "../components/NavigationComponents.jsx";
import { EmailSavingComponent, SocialContacts } from "../components/OutSidalComponents.jsx";

// Constants
const title = "Did you liked one of my projects ?";
const description = "Would you like us to meet up and chat ?";
const options = [
    {
        name:"Email-Me", 
        moji:"far fa-envelope", 
        Component: <EmailSavingComponent/> 
    },
    {
        name:"Contact-Me (Social Networks)", 
        moji:"fab fa-telegram-plane", 
        Component: <SocialContacts/> 
    }
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


// Base - Component
export default function Contact(){

    // Upper-State
    const [ activeOption, setActiveOption ] = useState(0);

    // Upper-Constants
    const hF = <HeroFooter activetab={activeOption} tabSetter={setActiveOption} options={options} />;

    return(
        <>
            <AppBar/>

            <Hero color="black" title={title} 
            description={description} 
            size="sh" foot={hF} />

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