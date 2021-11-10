import { AppBar } from "../components/NavigationComponents.jsx";

import Head from "next/head";
import Editor from "@monaco-editor/react";

export default function CodePlayGround({}){

    return( 
        <>
            <Head>
                <title> NobuCoder | Projects </title>
            </Head>
            <AppBar/>
            <div className="columns">
                <div className="column is-half">
                <Editor
                        height="89vh"
                        defaultLanguage="javascript"
                        defaultValue="// some comment"
                        theme="vs-dark"
                    />                
                </div>
            <div className="column">
                <button>Run : 
                    <span>
                        <i className="fas fa-play"/>
                    </span>
                </button>
                <label>Output : </label>
                <iframe> Second column </iframe>
            </div>
            </div>
        </>
    );
}