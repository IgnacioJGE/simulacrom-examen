import { Handlers, PageProps } from "$fresh/server.ts";
import ButtonLogout from "../../islands/Buttonlogout.tsx"
import Booty from "../../islands/Button.tsx"
import { getCookies } from "$std/http/cookie.ts";
import axios from "npm:axios";
import Solo from "../../components/solo.tsx"


export const handler: Handlers={

async GET(_req,ctx){
  
      const cuqui=getCookies(_req.headers);
      const data= await _req.headers.get("referer");
      const idvid=data?.split("/").at(4)
      const respuesta= (await axios.get(`https://videoapp-api.deno.dev/video/${cuqui.id}/${idvid}`)).data
      console.log(data)
      console.log(idvid)
      console.log(respuesta)

      return ctx.render({cuqui,respuesta})


}
}

export default   function Greet(props: PageProps) {

  return(
    <Solo 
    props={props}/>
    );
}


