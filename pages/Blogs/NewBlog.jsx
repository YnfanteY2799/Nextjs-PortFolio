import { useRouter } from "next/router";
import { AppBar } from "../../components/NavigationComponents";


export default function NewBlog(){

    const routing = useRouter(); 

    console.log(routing.pathname)


    return (
    <>
        <AppBar/>
        <div className="container">



        </div>
    </>
    );

}