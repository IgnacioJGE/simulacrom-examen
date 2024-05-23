import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { setCookie, getCookies, deleteCookie } from "$std/http/cookie.ts";
import axios from "npm:axios";



const ButtonLogout: FunctionalComponent=()=>{

const  handleonclick=()=>{

window.location.href="/login";

}

return(

    <button class="logout-button" onClick={handleonclick} >Logout</button>
);


}

export default ButtonLogout;


