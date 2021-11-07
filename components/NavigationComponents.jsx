import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/router';

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
    const rou = useRouter();
    return opts.map(({ name, route }, i ) =>
        <Link href={route} key={i}>
            <a className={`navbar-item ${route === rou.pathname ? "is-active" : ""}`}>{`${name}`}</a>
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

    // Hookified - Variables
    const [ mobileDropdownActive, setMobileDropdownActive ] = useState(false);
    
    // Router Next Hook
    const rout = useRouter();

    let _basicLeftOptions = [
        {name:"About", route:"/About", active:true },
        {name:"Contact", route:"/Contact", active:false },
    ];

    let _dropdownOptions = [
        {name:"Java Projects", route:"/Projects#java" },
        {name:"Node Projects", route:"/Projects#nodejs"},
        {name:"Deno Projects", route:"/Projects#denojs"},
        {name:"Rust Projects", route:"/Projects#rust"},
    ];

    return <> 
        <nav className="navbar is-black">
                
            <div className="navbar-brand">
                {/* Brand */}
                <Link href="/">
                    <a className={`navbar-item ${rout.pathname === "/" ?  "is-active" : ""}`}> Home </a>
                </Link>
                
                {/* Hamburguer */}
                <div className={`navbar-burger ${mobileDropdownActive && 'is-active'}`} data-target="navbar" onClick={() => setMobileDropdownActive(!mobileDropdownActive)} >
                    <span/> <span/> <span/>
                </div>
            </div>
    
            <div id="navbar" className={`navbar-menu ${mobileDropdownActive && 'is-active'}`}>
                {/* Navbar Start */}
                <div className="navbar-start">

                    <NavbarOptions opts={_basicLeftOptions}/>

                    {/* DropDown */}
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link href="/Projects">
                            <a className={`navbar-link ${rout.pathname === "/Projects" ? "is-active" : ''}`}> Projects </a>
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
                                    <a className={`button ${rout.pathname === "/Details" ? 'is-success' : "is-white"}`}>
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