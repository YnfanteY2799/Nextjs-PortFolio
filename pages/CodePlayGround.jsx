import { useRouter } from "next/router";
import { codeDefaultNhen } from "../public/static/codeDefaults.js";
import Head from "next/head";
import Editor from "@monaco-editor/react";
import dynamic from 'next/dynamic'


import { AppBar } from "../components/NavigationComponents.jsx";

import { useState, useRef } from "react";

function defineDefaultValue(str){
    switch(str){
        case 'Nhen':
            return codeDefaultNhen;

    }

}


export default function CodePlayGround({baseCode = "Nhen"}){

    // Statefull Variables
    const monacoRef = useRef();
    const [ codeValue, setCodeValue ] = useState(defineDefaultValue(baseCode));

    // functions
    function handleEditorMount(value) {
        monacoRef.current = value;
    }
    
    function getValue(){
        setCodeValue(monacoRef.current.getValue());
    }


    return( 
        <>
            <Head>
                <title> NobuCoder | Projects </title>
            </Head>
            <AppBar/>
            <div className="columns">
                <div className="column">
                        <Editor height={"87vh"}
                        defaultLanguage="javascript" 
                        defaultValue={defineDefaultValue(baseCode)}
                        theme="vs-dark"
                        onMount={handleEditorMount}
                        />
                </div>
                <div className="column">

                    <button onClick={() => getValue()}>Run : 
                        <span>
                            <i className="fas fa-play"/>
                        </span>
                    </button>
                    
                    <label>Output : </label>
                    <iframe srcDoc={`<!DOCTYPE html>
                    <html>
                    <head>
                        <title>Page Title</title>
                    </head>
                    <body>
                        <script>
                        ${codeValue}
                        </script>
                        <div id="#root">This is a paragraph.</div>
                    
                    </body>
                    </html> 
                    `}/>
                
                </div>
            </div>
        </>
    );
}