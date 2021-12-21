import { AppBar, Hero } from "../components/NavigationComponents.jsx";
import { useEffect, useState } from "react";
import Image from "next/image";

function HomeBody(pfp = null){

  return <div className="center">

    <image src={pfp}/>
    <p>
      {`Hi, i'm Yassett Jose Ynfante Jimenez`}
    </p>


  </div>;

}





export default function Home(){

  const [ profilePicture, setProfilePicture ] = useState(null);


  
  useEffect(
    ()  => {
      fetch("https://github.com/YnfanteY2799.png")
      .then(x => console.log(x))
      // .then(x =>{console.log(x) ;setProfilePicture(x)})
    }


  )

  return <>
      <AppBar />
        <div>
          <Hero color="black" title = {HomeBody(profilePicture)} size="ism"/>
          <Hero color="black" title = {HomeBody()} size="ism"/>
        


        </div>
    </>;

}