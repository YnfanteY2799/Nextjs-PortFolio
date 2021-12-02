import { AppBar } from "../components/NavigationComponents";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// In_Component_Functions
function formatDates(arg = '2021-10-29T20:42:56Z'){
    if(arg === "N/A"){
        return "There's not a single commit";
    }else{
        arg = (arg??'');
        arg = arg.split("-");
        arg = ` ${arg[2]?.split("T")[0]}/${arg[1]}/${arg[0]}`
        return arg;
    }
}

// Components
function Cards({data = [1,2,3,4,5,6,7,8], chunking = 3}){
    
    let subDivided = [];

    let RenderingCards = ( {  dataToRender } ) => {
        return dataToRender.map(({projectName, mainImg ,secondImg, projectDescription, source, last_commit},i) => {            
            return(
            <div className="column" key={i}>
                <div className="isHoverable">
                    <div className="card">
                        
                        <div className="card-image is-rounded">
                            <figure className="image is-4by4 ">
                                
                                <Image src={`${"/loading.gif"}`} height="255" width="400" alt="Github" layout="responsive"/>

                                {/* <Image src="/loading.gif" height="255" width="400" alt="Github" /> */}
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
                                    <Link href={`${source}`}>
                                        <a className="title is-4">{projectName}</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="content">
                                <p>
                                    {projectDescription}
                                </p>
                                <p></p>
                                <hr/>
                                <p>
                                    Last Commit at :
                                    <time dateTime="2016-1-1">{formatDates(last_commit)}</time>
                                </p>
                            </div>
                        </div>

                        {(source !== undefined) && (
         
                        <footer className="card-footer">
                            
                            <Link href={`${source}/commits`}>
                                <a className="card-footer-item"> History </a>
                            </Link>
                            
                            <Link href={`${source}`}>
                                <a className="card-footer-item"> Source </a>
                            </Link>
                            
                            <div className="card-footer-item">
                                <Link href={`/CodePlayGround?pro=nhen`}>
                                    <a className="card-footer-item"> Test it! </a>
                                </Link>
                            </div>

                        </footer>
                        )}
                    </div>
                </div>
            </div>
        )});
    };

    for(let i = 0; i < data.length; i++){
        if(i % chunking === 0){
            let subData = data.slice(i, i + chunking);
            subDivided = [...subDivided,
            <div key={i} className="columns">
                <RenderingCards dataToRender={subData}/>
            </div>
            ];
        }
    }

    return subDivided;
}

function Body({projects = []}){
    return projects.map(({divisionName, subAddOnIcon, subTitle, projects},index) => 
      <div className="container card_container" key={index}>
        <p className="title is-1 is-spaced">
            {divisionName}
            <Image src={subAddOnIcon} height = "40" width= "38" alt={subTitle}/>
            <a name={`${(divisionName??'').split(" ")[0].toLowerCase()}`}/>
        </p>
        <p className="subtitle is-3">{subTitle}</p>
        <hr/>
        <Cards data={projects} chunking={3} />
      </div>
    );
}

export default function Projects(){

    // Statefull-variables
    const [ _dinamProjects, _setDynamProjects ]  = useState([]);

    // constant Variables
    const _projects = [
        {
            divisionName: "Loading Projects", 
            subAddOnIcon:"/loading-25.gif" ,
            subTitle:" Wait until the projects information is loaded ", 
            projects:[1,2,3]
        },
    ];

    // Functions
    async function getInitialData(){
        _setDynamProjects([...await ( await fetch('/api/projectsAPI')).json()]);
    }

    // UseEffect -> Caller
    useEffect(() => getInitialData(),[]);

    return( 
        <>
        <AppBar />
        <div>    
            <Body projects={_dinamProjects.length > 0 ? _dinamProjects : _projects}/>
        </div>   
        </>
    );

}