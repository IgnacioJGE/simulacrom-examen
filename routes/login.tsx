import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { error } from "$fresh/src/dev/error.ts";
import axios from 'npm:axios';
import { setCookie, getCookies } from "$std/http/cookie.ts";

let fallo:boolean=false;

export const handler: Handlers = {
     async POST(req, ctx) {
      const url = await req.formData();

      const emilio = url.get("email")||"";
      const contra= url.get("password")||"";
      try {
        const respuesta= await axios.post("https://videoapp-api.deno.dev/checkuser",{
            email:emilio,
            password:contra
          })
          const headers = new Headers();
// Configurar la primera cookie con el nombre del usuario
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
          console.log(respuesta);

          headers.set("location", "/videos");
          return new Response(null, {
            status: 303, 
            headers, 
          });

      } catch (error) {
        fallo=true;

        return ctx.render();

      }
    },
    GET: async (_req:Request,ctx:FreshContext)=>{
      const cuqui=getCookies(_req.headers);
 
      try {
        const respuesta= await axios.post("https://videoapp-api.deno.dev/checkuser",{
          email:cuqui.email,
          password:cuqui.password
        })
        const headers= new Headers();
        console.log("papi ute si esta loguiao")
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
export default function Login(){
    return(
<html>
    <head>
        <title>front</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="/styles.css"/>
    </head>
    <body>
        <div class="login-container">
            <h2>Login</h2>
            {fallo&&
            <div>
            <p className="error-message">Incorrect credentials or user does not exist</p>
            </div>

            }
            <form method="POST" action="/login">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" required/>
                <label for="password">Password</label>
                <input type="password" id="password" name="password"required/>
                <button type="submit">Login</button>
                <p class="register-link">
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </form>
        </div>
    </body>
</html>

    );

}