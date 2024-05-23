import { JSX } from "preact";
import axios from "npm:axios";
import { FunctionalComponent } from "preact";
import { StateUpdater, useEffect, useState } from "preact/hooks";

export type props = {
    userid: string,
    videoid: string,
    children:preact.ComponentChildren,
    fav:boolean,
}

const cambiar = async (idv: string, idu: string,txt:boolean,settexto:StateUpdater<boolean>) => {
    try {
        const respuesta = await axios.post(`https://videoapp-api.deno.dev/fav/${idu}/${idv}`);
        console.log(respuesta.data); 
        settexto(!txt);
        return respuesta.data;
    } catch (error) {
        console.error('Error al cambiar el estado favorito:', error);
        throw error;
    }
};

const Booty:FunctionalComponent<props>=(props: props)=> {
console.log(props)
    const [valfav,setValfav]= useState(props.fav);
    const [texto,setText]=useState("");
    useEffect(() => {
        if(valfav){
            setText("❤️ Remove from Favorites")
        }else{
            setText("🤍 Add to Favorites")
        }
      }, [valfav]);
    const handleClick =  () => {
        try {
             cambiar(props.videoid, props.userid,valfav,setValfav);
             debugger;

            // Puedes hacer algo después de que la solicitud se haya completado, si es necesario
        } catch (error) {
            console.error('Error al hacer clic en el botón:', error);
            // Puedes manejar el error aquí si es necesario
        }
    };

    return (
        <button class="fav-button" onClick={handleClick}>{texto}</button>
    );
}
export default Booty;