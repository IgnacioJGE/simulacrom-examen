import { JSX } from "preact";
import axios from "npm:axios";
import { FunctionalComponent } from "preact";

export type props = {
    userid: string,
    videoid: string,
    children:preact.ComponentChildren
}

const cambiar = async (idv: string, idu: string) => {
    try {
        const respuesta = await axios.post(`https://videoapp-api.deno.dev/fav/${idu}/${idv}`);
        console.log(respuesta.data); 
        return respuesta.data;
    } catch (error) {
        console.error('Error al cambiar el estado favorito:', error);
        throw error;
    }
};

const Booty:FunctionalComponent<props>=(props: props)=> {
    const handleClick =  () => {
        try {
          debugger;
             cambiar(props.videoid, props.userid);
            // Puedes hacer algo después de que la solicitud se haya completado, si es necesario
        } catch (error) {
            console.error('Error al hacer clic en el botón:', error);
            // Puedes manejar el error aquí si es necesario
        }
    };

    return (
        <button class="fav-button" onClick={handleClick}>{props.children}</button>
    );
}
export default Booty;