import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handleVaciar=()=>{
        vaciarCarrito()
    }



  return (
    <div className='container'>
        <h1 className='main-title'>Carrito</h1>

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

         <h2>Total a pagar: ${precioTotal()}</h2> 
        <button onClick={handleVaciar}>Vaciar</button>




    </div>
  )
}

export default Carrito