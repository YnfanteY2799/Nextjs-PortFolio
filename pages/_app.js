import '../styles/globals.css';
import Head from "next/head";
import 'bulma/css/bulma.css';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({Component, pageProps}){
  return( 
    <>
      <Head>
        {/* Responsive Header */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      </Head>
      
      <Component {...pageProps}/>  
    </>
  );
}
