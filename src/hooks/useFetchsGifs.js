import { useEffect, useState } from "react"
import { peticion } from "../Helpers/getGifs";

/* custom hooks, para manejar la peticion http desde aca y no recargar el componente que lo renderisara 
    ademas recordemos que los hooks 

*/

export const useFetchsGifs = (query) => {
  
    const [state, setState] = useState(
      {
          data:[],
          loading: true
      }  
    );

    // esto se va a ejecuta unicamente cuando la dependencia query cambie
    useEffect(()=>{

        peticion(query)
                    .then( gifs =>{

                        setTimeout(()=>{

                            setState({
                                data:gifs,
                                loading:false
                            
                            });   
                        }, 1500);
                    });
    }, [query]);

    return state; // retorna data:[] y loading: true

}
