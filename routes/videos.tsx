import { Handlers } from "$fresh/server.ts";
import { setCookie, getCookies } from "$std/http/cookie.ts";
import Videos from "../components/video.tsx"
import { type PageProps } from "$fresh/server.ts";
import {props} from "../components/video.tsx"


export const handler: Handlers={
 async GET(_req,ctx){
    const cuqui=getCookies(_req.headers);

    return ctx.render({cuqui})
 }
}

const  Page=(props:PageProps<props>)=> {
    const galleta=props.data.cuqui;
    console.log(galleta)
return(
    <Videos cooki={galleta}/>
);    
}

export default Page;