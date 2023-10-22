import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handleVaciar=()=>{
        vaciarCarrito()
    }

  return (
    <div className='container'>
        <h1 className='main-title'>
        <FontAwesomeIcon icon={faShoppingCart} /> Carrito
        </h1>
        {
            carrito.map((producto)=>(
                <div key={producto.id}>
                  <h3>{producto.titulo}</h3>
                  <p>${producto.precio}</p>
                  <p>Cantidad: {producto.cantidad}</p>
                  <p>Precio Total: ${producto.precio * producto.cantidad}</p>
                </div>
            ))
        }
        {
          carrito.length > 0 ?
          <>
          <h2>Total a pagar: ${precioTotal()}</h2> 
          <button className='boton' onClick={handleVaciar}>Vaciar</button>
          <br/>
          <br/>
          <Link to="/checkout"><button className='boton'> Comprar:</button></Link>
         </>:
         <h2>Carrito Vacio</h2>
        }
    </div>
  )
}

export default Carrito