import 'bulma/css/bulma.min.css';
import Head from 'next/head';
import Image from 'next/image';
import { AppBar } from "../components/NavigationComponents.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title> NobuCoder | Home </title>
      </Head>
    <div>
      <AppBar />

      <div className="container">

        <ul className="slider">
          <li id="slide1">
            a
          </li>
          <li id="slide2">
            b
          </li>
          <li id="slide3">
            c
          </li>
        </ul>
        
      </div>

    </div>
    </>
  )
}
