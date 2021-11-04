import { AppBar , AsidedLeftMenu } from "../components/NavigationComponents";
import Image from "next/image";
import { useState, useEffect } from "react";


function Cards({data = [1,2,3,4,5,6,7,8], chunking = 3}){
    let subDivided = [];
    let RenderingCards = ( {  dataToRender } ) => {
        return dataToRender.map((x,i) => (
            <div className="column" key={i}>
                <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    {/* <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"> */}
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        {/* <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"> */}
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                    </div>
                    </div>

                    <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br/>
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
                </div>
            </div>
        ));
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


    // UseEffect -> Caller
    useEffect(() => async () => {
        const response = await fetch('https://api.github.com/users/YnfanteY2799/repos');
        response = await response.json()
        console.log(response)
        _setDynamProjects([1])

    }, [_dinamProjects]);

    return( 
        <div>
            <AppBar />
            <Body projects={_dinamProjects.length > 1 ? _dinamProjects : _projects}/>
        </div>   
    );

}