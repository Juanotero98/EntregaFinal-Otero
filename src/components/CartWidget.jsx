import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const {cantidadEnCarrito} = useContext(CartContext)

  return (
    <div>
      <Link className='menu-link' to="/carrito">
        Carrito
        <span className='numero'>{cantidadEnCarrito()}</span>
      </Link>
    </div>
  )
}

export default CartWidget