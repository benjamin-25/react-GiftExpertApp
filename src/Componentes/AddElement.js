import React, { useState } from 'react'
import PropTypes from 'prop-types'


// desestructuro la propiedad setHeroes
const AddElement = ({setBusqueda}) => {

    const [Valor, setValor] = useState('');


    const CapturaEvento =(e)=>{
        setValor(e.target.value);
    }

    const CapturaEnvio =(e)=>{
        // para no recargar la pagina al hacer enter
        e.preventDefault();

        if(Valor.length > 2){

        // comunicando entre componentes, asignandole el valor ingresado por teclado
        //setBusqueda(query =>[...query, Valor]);
        setBusqueda([Valor]);

    }
        else{
            alert('Ingresar un valor');
        }
        
    }

    return (
    
    <form onSubmit={CapturaEnvio}>
        <input
            type='Text'
            value={ Valor }
            onChange={ CapturaEvento }
        />
    </form>
    
    );
}

AddElement.propTypes ={

    setBusqueda:PropTypes.func.isRequired
}

export default AddElement;