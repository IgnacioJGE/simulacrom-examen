import { Handlers } from "$fresh/server.ts";
import { setCookie, getCookies } from "$std/http/cookie.ts";
import Videos from "../components/video.tsx"
import { type PageProps } from "$fresh/server.ts";
import {props} from "../components/video.tsx"
import axios from "npm:axios";


export const handler: Handlers={
 async GET(_req,ctx){
    try {
        const cuqui=getCookies(_req.headers);
        console.log(cuqui.id)
        const respuesta= await axios.get(`https://videoapp-api.deno.dev/videos/${cuqui.id}`)
        const correcto= respuesta.data
        return ctx.render({cuqui,correcto})
    } catch (error) {
        console.log("Erro papi")
        return ctx.render()
    }

 }
}

const  Page=(props:PageProps<props>)=> {
    const galleta=props.data.cuqui;
    const videitos=props.data.correcto
    console.log(galleta)
return(
    <Videos 
    cooki={galleta}
    videitos={videitos}/>
);    
}

export default Page;