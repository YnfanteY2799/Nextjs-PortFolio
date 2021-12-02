import { AppBar } from "../../components/NavigationComponents";
import { useRouter } from "next/router";

export default function DynamicBlog(){

    // Hooks
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);


    // Rett-Body
    return(
        <>
            <AppBar/>
            <div>
                TEST is equals : {'Something not yet discovered!!!'}
            </div>
        </>
    );


}