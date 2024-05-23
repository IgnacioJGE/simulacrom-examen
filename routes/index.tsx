import { useSignal } from "@preact/signals";
import { Handlers } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import axios from "npm:axios";
export const handler: Handlers = {
  async GET(_req, ctx) {

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
      const headers = new Headers();
      headers.set("location", "/login");
      return new Response(null, {
        status: 303, // Código de estado "See Other" para redirección
        headers,    // Incluye las cabeceras configuradas
      });
    }
  },
};

export default function Home() {

}
