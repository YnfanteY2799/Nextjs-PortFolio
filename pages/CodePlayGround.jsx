import { codeDefaultNhen } from "../public/static/codeDefaults.js";
import { AppBar } from "../components/NavigationComponents.jsx";
import Editor from "@monaco-editor/react";

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
    const [ codeValue, setCodeValue ] = useState("");
    let data = ''


    // functions
    function handleEditorMount(value) {
        monacoRef.current = value;
    }
    
    function getValue(){
        setCodeValue(monacoRef.current.getValue());
    }



    return( 
        <>
          <AppBar/>
            <div className="columns">
                <div className="column">
                        <Editor height={"500px"} width={"700px"}
                        defaultLanguage="javascript"
                        theme="vs-dark" //onChange={e => setCodeValue(e)}
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