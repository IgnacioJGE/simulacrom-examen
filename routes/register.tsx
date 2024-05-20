import Register from"../components/register.tsx"
import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";
import { getCookies, setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
    async POST(_req, ctx) {
        const data= await _req.formData();
        const emilio= data.get("email")||"";
        const nombre= data.get("name")||"";
        const contra= data.get("password")||"";
try {
    const respuesta= await axios.post("https://videoapp-api.deno.dev/register",{
       email:emilio,
       password:contra,
       name:nombre 
    })
    const headers = new Headers();
    setCookie(headers, {
      name: "name",
      value: respuesta.data.name,
      sameSite: "Lax",
      path: "/",
      secure: true,
    });
    
    // Configurar la segunda cookie con el email
    setCookie(headers, {
      name: "email",
      value: emilio,
      sameSite: "Lax",
      path: "/",
      secure: true,
    });
    
    // Configurar la tercera cookie con la contraseña (aunque no es recomendable almacenar contraseñas en cookies)
    setCookie(headers, {
      name: "password",
      value: contra,
      sameSite: "Lax",
      path: "/",
      secure: true,
    });
    setCookie(headers, {
      name: "id",
      value: respuesta.data.id,
      sameSite: "Lax",
      path: "/",
      secure: true,
    });
    headers.set("location", "/videos");
    return new Response(null, {
      status: 303, // Código de estado "See Other" para redirección
      headers,    // Incluye las cabeceras configuradas
    });
} catch (error) {
    console.log("usuario ya registrado")
}
        return ctx.render();
      },
      GET: async (_req:Request,ctx:FreshContext)=>{
        const cuqui=getCookies(_req.headers);
   
        try {
          const respuesta= await axios.post("https://videoapp-api.deno.dev/checkuser",{
            email:cuqui.email,
            password:cuqui.password
          })
          const headers= new Headers();
          headers.set("location","/videos");
          return new Response(null, {
            status: 303, 
            headers, 
          });
        } catch (error) {
          console.log("uyyy no esta registrado papi")
        }
        debugger;
        return ctx.render();
      },
};

const  Page=()=> <Register/>;
export default Page;