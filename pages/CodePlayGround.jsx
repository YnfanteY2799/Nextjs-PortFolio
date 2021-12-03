import { AppBar } from "../components/NavigationComponents.jsx";
import { useState } from "react";
import { useRouter } from "next/router";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from "@codemirror/lang-javascript";


export default function CodePlayGround({baseCode = "Nhen"}){

    // Statefull Variables
    const routing = useRouter();
    const [ codeValue, setCodeValue ] = useState("");

    

    // functions

    return( 
        <>
          <AppBar/>
            <div className="columns">
                <div className="column">
                <CodeMirror
                    value={codeValue}
                    height="575px"
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value) => setCodeValue(value)} 
                    theme='dark'/>
                </div>
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
        </>
    );
}