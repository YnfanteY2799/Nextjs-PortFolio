import { AppBar } from "./NavigationComponents.jsx";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Editor from "@monaco-editor/react";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from "@codemirror/lang-javascript";


export default function CodePlayGround({baseCode = "Nhen"}){

    // Statefull Variables
    const monacoRef = useRef();
    const routing = useRouter();
    const [ codeValue, setCodeValue ] = useState("");

    // functions
    function handleEditorMount(value) {
        monacoRef.current = value;
    }
    

    function handleEditorChange (value, event) {

        


        console.log(value)
        // console.log(reference)
        setCodeValue()
    }

    console.log(window)

    return( 
        <>
          <AppBar/>
            <div className="columns">
                <div className="column">
                    <Editor 
                        height={"500px"} width={"700px"}
                        defaultLanguage="javascript"
                        theme="vs-dark" 
                        onMount={handleEditorMount}
                        onChange={handleEditorChange}
                        />

                    <div className="column">

                        <button >Run : 
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
            </div>
        </>
    );
}