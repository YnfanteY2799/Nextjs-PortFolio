import 'bulma/css/bulma.min.css';
import Head from 'next/dist/shared/lib/head';
import { AppBar, AsidedLeftMenu } from "../components/NavigationComponents.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title> NobuCoder | Home </title>
      </Head>
    <div>
      <AppBar />
      <div>
        
      <section className="hero">
        <div className="hero-body">
          <p className="title">
            Hero title
          </p>
          <p className="subtitle">
            Hero subtitle
          </p>
        </div>
      </section>

        
        
      </div>         
    </div>
    </>
  )
}
