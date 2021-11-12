import { AppBar, Hero, HeroCarousel } from "../components/NavigationComponents.jsx";
import { Card } from "../components/TestingComponents.jsx";
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



export default function Blog(){

    // Constvalues 
    const ms = 10000;
    const filteringOptions = ["Tags", "Language", "Topic"];
    const description = "Posting here what i usually think is usefull.";

    // statefull_variables
    let [ regs, setRegs ] = useState(10);
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

    return( <>
        <AppBar/>
        <div>
            
            <Hero color="dark" title="| Blog " description={description} size="m" 
            hasButton={true} button={''} btnState={searchBarIsOpen} />
            
            <SearchBar inputValue={search} filteringOptions={filteringOptions} filteringValue={filteringValue}
            onInputChange={({target:{value}}) => setSearch(value)} 
            onFilterChange={({target:{value}}) => setFilteringValue(value)} onButtonClick={onClickButton}
            show={searchBarIsOpen} handleVisib={() => setSearchBarIsOpen(!searchBarIsOpen)}
            />
            
            <div>

            </div>

        </div>
    </> );
}