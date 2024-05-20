import { type PageProps } from "$fresh/server.ts";
export type props={
name:string,
email:string,
password:string;
id:string,
}

const Videos:FunctionalComponent<props>=(cooki:props)=>{
    const {name,email,id,password}=cooki;
    console.log(cooki)
    debugger;
    return(
        <html>
            <head>
                <title>front</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="/styles.css"/>
                <link rel="modulepreload" href="/_frsh/js/e41a66cff1692b8cc93ff923d5ac37cdb4e84b80/main.js"/>
                <link rel="modulepreload" href="/_frsh/js/e41a66cff1692b8cc93ff923d5ac37cdb4e84b80/chunk-D4CPDDRE.js"/>
                <link rel="modulepreload" href="/_frsh/js/e41a66cff1692b8cc93ff923d5ac37cdb4e84b80/chunk-EW75SQVC.js"/>
                <link rel="modulepreload" href="/_frsh/js/e41a66cff1692b8cc93ff923d5ac37cdb4e84b80/island-logout.js"/>
                <link rel="modulepreload" href="/_frsh/js/e41a66cff1692b8cc93ff923d5ac37cdb4e84b80/chunk-4CINKZAY.js"/>
                <link rel="modulepreload" href="/_frsh/js/e41a66cff1692b8cc93ff923d5ac37cdb4e84b80/island-fav.js"/>
                <link rel="modulepreload" href="/_frsh/js/e41a66cff1692b8cc93ff923d5ac37cdb4e84b80/chunk-JHKPRBOW.js"/>
            </head>
            <body>
                <div class="page-container">
                    <header class="header-container">
                        <div class="header-content">
                            <span class="user-name">{cooki.cooki.name}</span>
                       
                            <a class="logout-button">Logout</a>

                        </div>
                    </header>
                    <div class="video-page-container">
                        <h1 class="video-list-title">Curso Deno Fresh</h1>
                        <div class="video-list-container">
                            <div class="video-item" data-fresh-key="66422f4b5a922dd78912958d">
                                <a href="/video/66422f4b5a922dd78912958d" class="video-link">
                                    <img src="https://i.ytimg.com/vi/0GuSxDagyVk/hqdefault.jpg" alt="Curso Deno Fresh - Video 1" class="video-thumbnail"/>
                                    <div class="video-info">
                                        <h3 class="video-title">Curso Deno Fresh - Video 1</h3>
                                        <p class="video-description">Introduction to Deno Fresh</p>
                                        <p class="video-release-date">Release date: 2/10/2024</p>
                                    </div>
                                </a>
                                <button class="fav-button">❤️ Remove from Favorites</button>
                            </div>
                            <div class="video-item" data-fresh-key="66466b5889684d904e6641d6">
                                <a href="/video/66466b5889684d904e6641d6" class="video-link">
                                    <img src="https://i.ytimg.com/vi/NFqR2NGrGUM/hqdefault.jpg" alt="Curso Deno Fresh - Video 2" class="video-thumbnail"/>
                                    <div class="video-info">
                                        <h3 class="video-title">Curso Deno Fresh - Video 2</h3>
                                        <p class="video-description">Access to server side data</p>
                                        <p class="video-release-date">Release date: 5/16/2024</p>
                                    </div>
                                </a>
                                <button class="fav-button">❤️ Remove from Favorites</button>
                            </div>
                            <div class="video-item" data-fresh-key="66466c3289684d904e6641d7">
                                <a href="/video/66466c3289684d904e6641d7" class="video-link">
                                    <img src="https://i.ytimg.com/vi/PNBKeR8wakg/hqdefault.jpg" alt="Curso Deno Fresh - Video 3" class="video-thumbnail"/>
                                    <div class="video-info">
                                        <h3 class="video-title">Curso Deno Fresh - Video 3</h3>
                                        <p class="video-description">Dynamic routes</p>
                                        <p class="video-release-date">Release date: 5/16/2024</p>
                                    </div>
                                </a>
                                <button class="fav-button">❤️ Remove from Favorites</button>
                            </div>
                            <div class="video-item" data-fresh-key="66466cc989684d904e6641d8">
                                <a href="/video/66466cc989684d904e6641d8" class="video-link">
                                    <img src="https://i.ytimg.com/vi/CQChGlGn4qU/hqdefault.jpg" alt="Curso Deno Fresh - Video 4" class="video-thumbnail"/>
                                    <div class="video-info">
                                        <h3 class="video-title">Curso Deno Fresh - Video 4</h3>
                                        <p class="video-description">Server side debugging</p>
                                        <p class="video-release-date">Release date: 4/16/2024</p>
                                    </div>
                                </a>
                                <button class="fav-button">❤️ Remove from Favorites</button>
                            </div>
                            <div class="video-item" data-fresh-key="66466e3789684d904e6641d9">
                                <a href="/video/66466e3789684d904e6641d9" class="video-link">
                                    <img src="https://i.ytimg.com/vi/Mp9IwDHrtG4/hqdefault.jpg" alt="Curso Deno Fresh - Video 5" class="video-thumbnail"/>
                                    <div class="video-info">
                                        <h3 class="video-title">Curso Deno Fresh - Video 5</h3>
                                        <p class="video-description">Forms with GET method</p>
                                        <p class="video-release-date">Release date: 4/16/2024</p>
                                    </div>
                                </a>
                                <button class="fav-button">❤️ Remove from Favorites</button>
                            </div>
                        </div>
                    </div>
                </div>
               
                
            </body>
        </html>
        
    );

}

export default Videos;