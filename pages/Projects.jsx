import { AppBar } from "../components/NavigationComponents";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function Cards({data = [1,2,3,4,5,6,7,8], chunking = 3}){
    let subDivided = [];
    let RenderingCards = ( {  dataToRender } ) => {
        return dataToRender.map(({projectName, secondImg, projectDescription},i) => {            
            return(
            <div className="column" key={i}>
                <div className="isHoverable">
                    <div className="card">
                        
                        <div className="card-image">
                            <figure className="image is-4by4">
                                <Image src="/github.svg" height="30" width="30" alt="Github"/>
                            </figure>
                        </div>
                        
                        <div className="card-content">
                            <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                <Image src={secondImg === undefined ? '/js.svg' : secondImg} height="30" width="30" alt={projectName}/>
                                </figure>
                            </div>
                                <div className="media-content">
                                    <p className="title is-4">{projectName}</p>
                                </div>
                            </div>

                            <div className="content">
                                <p>
                                    {projectDescription}
                                </p>
                                <p></p>
                                <hr/>
                                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                            </div>
                        </div>

                        <footer className="card-footer">
                            <Link href="#">
                                <a className="card-footer-item"> Details </a>
                            </Link>
                            <div className="card-footer-item"/>
                            <Link href="#">
                                <a className="card-footer-item"> Source </a>
                            </Link>
                        </footer>

                    </div>
                </div>
            </div>
        )});
    };

    for(let i = 0; i < data.length; i++){
        if(i % chunking === 0){
            let subData = data.slice(i, i + chunking);
            subDivided = [...subDivided, (
            <div key={i} className="columns">
                <RenderingCards dataToRender={subData}/>
            </div>
            )];
        }
    }

    return subDivided;
}

function Body({projects = []}){
    return projects.map(({division, subAddOnIcon, subTitle, projects},index) => {
      return( 
      <div className="container card_container" key={index}>
        <p className="title is-1 is-spaced">
            {division}
            <Image src={subAddOnIcon} height="30" width="30" alt={subTitle}/>
        </p>
        <p className="subtitle is-3">{subTitle}</p>
        <hr/>
        <Cards data={projects} chunking={3} />
      </div>
      );
    })
}

export default function Projects(){

    // Statefull-variables
    const [ _dinamProjects, _setDynamProjects ]  = useState([]);

    // constant Variables
    const _projects = [
        {division: "NodeJs Projects ", subAddOnIcon:"/node.svg" ,subTitle:"Projects i've made while i was learning NodeJs", projects:[1,2,3]},
        {division: "DenoJs Projects ", subAddOnIcon:"/deno.svg" ,subTitle:"", projects:[1,2,3]},
        {division: "Java Projects ", subAddOnIcon:"/java.svg" ,subTitle:"", projects:[1,2,3]},
        {division: "Rust Projects ", subAddOnIcon:"/rust.svg" ,subTitle:"", projects:[1,2,3]},
    ];

    // Functions
    async function getInitialData(){
        // const response = await fetch('https://api.github.com/users/YnfanteY2799/repos');
        const response = await fetch('api/sampleDataCaller');
        response = await response.json();
        _setDynamProjects(response);
    }

    // UseEffect -> Caller
    useEffect(() => getInitialData(),[]);

    return( 
        <div>
            <AppBar />
            
            <Body projects={_dinamProjects.length > 1 ? _dinamProjects : _projects}/>

        </div>   
    );

}