import React from 'react'

const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src={producto.imagen}/>
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <a className='info' href={`/item/${producto.id}`}>Info</a>
        </div>

    </div>
  )
}

export default Item