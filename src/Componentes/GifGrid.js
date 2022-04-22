import React from 'react'
import PropTypes from 'prop-types';
import GifItems from './GifItems';
import { useFetchsGifs } from '../hooks/useFetchsGifs';

const GifGrid = ({query}) => {
  
    //const [Imagen, setImagen] = useState([]);

    /* con el useeffect podemos ejecutar codigo de manera condicional, para este caso 
        le inico que la funcion peticion solo se ejecute la primera vez que se renderiza
        el componente.
        El segundo argumento es un arreglo de dependencias, es decir si este cambia el useEffect
        se ejecuta nuevamente corriendo de nuevo la consulta al Endpoint.
    
    useEffect(()=>{
        // uso el hook de estado para asignar lo obtenido de la API y asi poder maniobrtar con este
        peticion(query).then(imgs => setImagen(imgs));
    },[query]);

    */


    /* uso de custom hooks, el cual me retorna un objeto con el arreglo de la data 
        y el loading, con el que dre manejar la espera en la aplicacion
    */

    const {data:Imagen,loading} =useFetchsGifs(query);

    return (
    <div className='card-grid'>
        <ol>
            {
                Imagen.map(img =>(
                    <GifItems key={img.id} gifs={img}/>
                ))
            }
        </ol>
        {loading && <img className="loading" alt="icono carga" src='../loading.gif'/>}  
    </div>
  )
}

export default GifGrid;