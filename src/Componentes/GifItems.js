import React from 'react'



const GifItems = ({gifs}) => {
  return (
    <div className='card animate__animated animate__zoomInDown' key={gifs.id}>
        <img alt={gifs.titulo} key={gifs.id} src={gifs.url}></img>
        <p>{gifs.titulo}</p>
    </div>
  )
}



export default GifItems;