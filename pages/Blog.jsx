import { AppBar, Hero, HeroCarousel } from "../components/NavigationComponents.jsx";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function SearchBar(props){

    let { 
        inputValue, 
        onInputChange , 
        filteringValue , 
        filteringOptions, 
        onFilterChange, 
        onButtonClick, 
        show,
        handleVisib 
    } = props;

    return(
        <div className={`container is-max-desktop paddedSearchBar ${show ? 'show' : ''}`}>
            <div className="field has-addons">

                <p className="control">
                    <span className="select">
                        <select onChange={onFilterChange} value={filteringValue}>
                            {filteringOptions.map((x,i) => <option key={i}>{x}</option> )}
                        </select>
                    </span>
                </p>

                <p className="control is-expanded has-icons-left">
                    
                    <input className="input" type="text" placeholder="Search" value={inputValue} onChange={onInputChange}/>
                    
                    <span className="icon is-small is-left">
                        <i className="fab fa-searchengin"/>
                    </span>
                </p>

                <p className="control">
                    <button className="button is-primary" onClick={onButtonClick}> Search </button>
                </p>

                <p className="control paddedHideButton">
                    <button className="button is-secondary" onClick={handleVisib}>                         
                        <i className="fas fa-search-minus"/>
                    </button>
                </p>
            
            </div>
        </div>
    )  

}

function Body({content = [1,2,3,4,5,6,]}){

    let ret = [], divider = 4;

    for(let i = 0; i < content.length; i++){
        if(i % divider === 0 ){
            let subContent = content.slice(i, i + divider );
            ret.push(
                <div className ="columns" key={i}>
                    <Cards quant={subContent}/>
                </div>
            );
        }
    }

    return ret;
}

function Cards({ quant = [] }){
    return quant.map((x,i) => 
            <div className="column" key={i}>
            <div className="card is-rounded">
                
                <div className="card-image">
                    <figure className="image is-4by4 ">
                        <Image src={`${"/loading.gif"}`} height="255" width="400" alt="Github" layout="responsive"/>
                    </figure>
                </div>
                            
                <div className="card-content">
                    
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <Image src={'/js.svg'} height="30" width="30" alt={"projectName"}/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <Link href={`/Blogs/${'projectName'}`}>
                                <a className="title is-4">{"projectName"}</a>
                            </Link>
                         </div>
                    </div>

                    <div className="content">
                            <p>{"projectDescription"}</p>
                            <p></p>
                            <hr/>
                            <p>
                                Last Commit at : 
                                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                            </p>
                        </div>
                    </div>

                    <footer className="card-footer">
                        <div className="card-footer-item"/>
                    </footer>
            </div>
        </div>
    );
}

export default function Blog(){

    // Constvalues 
    const filteringOptions = ["Tags", "Language", "Topic"];
    const description = "Posting here what i usually think is usefull.";

    // statefull_variables
    let [ regs, setRegs ] = useState([{one:1},{one:2},{one:3}]);
    let [ search, setSearch ] = useState("");
    let [ filteringValue, setFilteringValue ] = useState( filteringOptions[0] );
    let [ searchBarIsOpen, setSearchBarIsOpen ] = useState( true );

    
    //Functions
    function onClickButton(){
        console.log(search);
        console.log(filteringValue);
    }

    
    
    //useEffect
    useEffect(() => {
        console.log("Loading Effect");
    },[]);

    return( 
    <>
        <AppBar/>
        <div>
            
            <Hero color="black" title="| Blog " description={description} size="m" 
            hasButton={true} button={''} btnState={searchBarIsOpen} />
            
            <SearchBar inputValue={search} filteringOptions={filteringOptions} filteringValue={filteringValue}
            onInputChange={({target:{value}}) => setSearch(value)} 
            onFilterChange={({target:{value}}) => setFilteringValue(value)} onButtonClick={onClickButton}
            show={searchBarIsOpen} handleVisib={() => setSearchBarIsOpen(!searchBarIsOpen)}
            />
            
            <div className = "container card_container">
                <Body />
                {/* <ContentRedering cont={regs}/> */}
            </div>

        </div>
    </> 
    );
}