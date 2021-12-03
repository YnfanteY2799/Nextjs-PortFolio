import { AppBar } from "../components/NavigationComponents.jsx";
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

    function handleEditorMount(value) {
        monacoRef.current = value;
    }
    

    // functions

    return( 
        <>
          <AppBar/>
            <div className="columns">
                <div className="column">
                {/* <CodeMirror
                    value={codeValue}
                    height="565px"
                    extensions={[javascript({ jsx: true })]}
                    onChange={v => setCodeValue(v)} 
                    theme='dark'/>
                </div> */}

                <Editor height={"500px"} width={"700px"}
                        defaultLanguage="javascript"
                        theme="vs-dark" //onChange={e => setCodeValue(e)}
                        onMount={handleEditorMount}
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