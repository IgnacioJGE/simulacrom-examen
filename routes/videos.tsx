import { Handlers } from "$fresh/server.ts";
import {  getCookies, deleteCookie } from "$std/http/cookie.ts";
import Videos from "../components/video.tsx"
import { type PageProps } from "$fresh/server.ts";
import {props} from "../components/video.tsx"
import axios from "npm:axios";


export const handler: Handlers={

 async GET(_req,ctx){
    try {
        const cuqui=getCookies(_req.headers);
        const respuesta= await axios.get(`https://videoapp-api.deno.dev/videos/${cuqui.id}`)
        const correcto= respuesta.data

        return ctx.render({cuqui,correcto})
    } catch (error) {
        const headers = new Headers();
        headers.set("location", "/login");
        return new Response(null, {
          status: 303, // Código de estado "See Other" para redirección
          headers,    // Incluye las cabeceras configuradas
        });
    }

 }
}

const  Page=(props:PageProps<props>)=> {
    const galleta=props.data.cuqui;
    const videitos=props.data.correcto
return(
    <Videos 
    cooki={galleta}
    videitos={videitos}/>
);    
}

export default Page;