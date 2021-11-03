import Link from "next/link";
import Image from "next/image";

let getIcon = n => `/${n.toLowerCase()}.svg`;

function DropDownOpts({opts = []}){
    return opts.map(({name, route},i) => 
        <Link key={i} href={route}>
            <a className="navbar-item">
                {name}
                <span className="dropDownLogo">
                    <Image className="dropDownLogo" src={getIcon( name.split(" ")[0] )} width="30" height="30" alt={name}/>    
                </span>
            </a>
        </Link>
    );
}

function NavbarOptions({ opts = [] }){
    return opts.map(({name, route}, i ) =>
        <Link href={route} key={i}>
            <a className="navbar-item">{`${name}`}</a>
        </Link>
    );
}

function GoBack(){
    return <div>
        <Link href="/">
            <a>{' <<<<< Back '}</a>
        </Link>
    </div>;
}

function AppBar(){

    let _basicLeftOptions = [
        {name:"About", route:"/About"},
        {name:"Contact", route:"/Contact"},
    ];

    let _dropdownOptions = [
        {name:"Java Projects", route:"/Contact" },
        {name:"Node Projects", route:"/Contact"},
        {name:"Deno Projects", route:"/Contact"},
        {name:"Rust Projects", route:"/Contact"},
    ];

    return <> 
        <nav className="navbar is-black">
                
            <div className="navbar-brand">
                {/* Brand */}
                <Link href="/">
                    <a className="navbar-item"> Home </a>
                </Link>
                
                {/* Hamburguer */}
                <div className="navbar-burger" data-target="navbar">
                    <span/> <span/> <span/>
                </div>
            </div>
    
            <div id="navbar" className="navbar-menu">
                {/* Navbar Start */}
                <div className="navbar-start">

                    <NavbarOptions opts={_basicLeftOptions}/>

                    {/* DropDown */}
                    <div className="navbar-item has-dropdown is-hoverable is-active">
                        <Link href="/Projects">
                            <a className="navbar-link"> Projects </a>
                        </Link>

                        <div className="navbar-dropdown is-boxed">
                            <DropDownOpts opts={_dropdownOptions}/>
                        </div>
                    </div>

                </div>
        
                <div className="navbar-end">
                    
                    <div className="navbar-item">

                        <div className="field is-grouped">
                            <p className="control">
                                <Link href="/Details">                    
                                    <a className="button is-white">
                                        <span className="icon"><i className="far fa-user"/></span>
                                        <span> Click Me for Details </span>
                                    </a>
                                </Link>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
    </nav>
  </>;
}

function AsidedLeftMenu(){
  return( 
    <aside className="bd-docs-nav " style={{float:'left'}}>
            

    </aside>
  );
}



export { GoBack, AppBar, AsidedLeftMenu,  };