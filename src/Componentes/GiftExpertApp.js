import React, { useState } from 'react'
import AddElement from './AddElement';
import GifGrid from './GifGrid';


// snippet rafc
const GiftExpertApp = () =>{
  
  //const categorias = ['Goku','Iron Man'];
  
  const [Busqueda, setBusqueda] = useState(['']);

  // prueba de una forma en la que podriamos agregar un heroe al arreglo
  const AgregaHeroe = ()=>{

    // duplicamos el arreglo con el nuevo elemento
    setBusqueda([...Busqueda, 'Thor']);
  }
  
  /* en el uso del componente AddElement
    mando una funcion por los props.
    */
  return (
    <>
        <h2>Gift Expert App</h2>
        <br/>
        
        <AddElement setBusqueda ={ setBusqueda }/>
        <hr/>
        {
            Busqueda.map(valor =>(
              <GifGrid key={valor} query={valor}/>
            ))
        }
    </>
  );
}

export default GiftExpertApp;