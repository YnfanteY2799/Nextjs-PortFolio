import { AppBar, Hero, HeroCarousel } from "../components/NavigationComponents.jsx";
import { Card } from "../components/TestingComponents.jsx";
import { useEffect, useState } from "react";



export default function Blog(){
    // Constvalues 
    const ms = 10000;
    const optss = [1,2,3];

    // statefull_variables
    let [ regs, setRegs ] = useState(10);

    //useEffect
    useEffect(() => {
        console.log("Loading Effect");
    },[]);

    return( <>
        <AppBar/>
        <div>
            
            <Hero color="dark" title="| Blog " description="Posting here what i usually think is usefull." size="m"/>
            <section className="hero is-dark">
                <HeroCarousel/>
            </section>    
            <div className="container is-max-desktop">
                <div>
                </div>
            </div>

        </div>
    </> );
}