import Link from "next/link";



export default function FirstPost(){
    return <>
    <div>
        First Post
    </div>
    <div>
        <Link href="/">  
            <a>
                {'Go back Home <<<<<<<'} 
            </a>
        </Link>
    </div>
    </>;
}