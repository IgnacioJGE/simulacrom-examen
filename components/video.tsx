import { type PageProps } from "$fresh/server.ts";
import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import Booty from "../islands/Button.tsx"
import ButtonLogout from "../islands/Buttonlogout.tsx"

export type props={
name:string,
email:string,
password:string;
id:string,
}
export type videoprops={
    title:string,
    thumbnail:string,
    description:string,
    duration:number,
    youtubeid:string,
    date:string,
    id:string,
    fav:boolean
}

const Videos:FunctionalComponent<props>=(cooki:props,videitos:videoprops[])=>{
    const {name,email,id,password}=cooki;
    return(
        <html>

            <body>
                <div class="page-container">
                    <header class="header-container">
                        <div class="header-content">
                            <span class="user-name">{cooki.cooki.name}</span>
                       
                            <ButtonLogout/>

                        </div>
                    </header>
                    <div class="video-page-container">
                        <h1 class="video-list-title">Curso Deno Fresh</h1>
                        <div class="video-list-container">

                            {cooki.videitos.map((char)=>(
                                
                                <div class="video-item" data-fresh-key={char.id}>
                             <a href={`/video/${char.id}`}class="video-link">
                             <img src={char.thumbnail} alt={char.title} class="video-thumbnail"/>
                             <div class="video-info">
                                        <h3 class="video-title">{char.title}</h3>
                                        <p class="video-description">{char.description}</p>
                                        <p class="video-release-date">Release date: {char.date}</p>
                                    </div>
                                </a>
                             <Booty userid={cooki.cooki.id} videoid={char.id} fav={char.fav}></Booty>

                                </div>
                            ))}
                        
                    </div>
                    </div>

                    </div>
               
            </body>
        </html>
        
    );

}

export default Videos;