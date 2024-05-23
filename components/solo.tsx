import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import Booty from "../islands/Button.tsx"
import ButtonLogout from "../islands/Buttonlogout.tsx"
import {PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { useEffect, useState } from "preact/hooks";

const getvid=async(idvid:string)=>{
const respuesta= await axios.get(`https://videoapp-api.deno.dev/videos/${idvid}`)
return(respuesta)
}

const Solo:FunctionalComponent<PageProps>= (PageProps)=>{
const response=PageProps.props;
console.log(response)

debugger;
return(
    <html>

        <body>
            <div class="page-container">
                <header class="header-container">
                    <div class="header-content">
                        <span class="user-name">Mpape</span>
                    <ButtonLogout/>
                     
                    </div>
                </header>
                <div class="video-detail-container">
                    <a href="/videos" class="back-button">← Go Back to List</a>
                    <div class="video-frame">
                        <iframe width="100%" height="400px" src={`https://www.youtube.com/embed/`}  title={response.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <h2 class="video-detail-title">{PageProps.props.respuesta.title}</h2>
                    <p class="video-detail-description">{PageProps.props.respuesta.description}</p>
                    <Booty fav={PageProps.props.respuesta.fav}/>
                </div>
            </div>

        </body>
    </html>
);
}

export default Solo;