import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src={producto.imagen}/>
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <Link className='info' to={`/item/${producto.id}`}>Mas Informacion</Link>
        </div>

    </div>
  )
}

export default Item