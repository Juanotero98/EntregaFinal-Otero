import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import {collection, addDoc,} from "firebase/firestore"
import {database} from "../Firebase/Configuracion"

const CheckOut = () => {

    const[pedidoId, setpedidoId] = useState("")
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    const {register, handleSubmit} = useForm()

    const comprar = (data) =>{
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido)

        const pedidosReferencia = collection(database, "pedidos")
        addDoc(pedidosReferencia, pedido)
        .then((doc)=>{
            setpedidoId(doc.id)
            vaciarCarrito()
        })
    }

    if(pedidoId){
        return(
            <div className="container">
                <h1 className="main-title">Gracias por tu compra</h1>
                <p> Tu numero ID de pedido es : {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className='container'>
        <h1 className='main-title'>Finalizar Compra:</h1>
        <form className='formulario' onSubmit={handleSubmit(comprar)}>

        <input type='text'  placeholder='ingrese su nombre' {...register("nombre")}/>
        
        <input type='email' placeholder='ingrese su email' {...register("email")}/>

        <input type='phone' placeholder='ingrese su numero de telefono' {...register("telefono")}/>
        
        <button className="Enviar" type='submit'>Comprar</button>
        </form>
    </div>
  )
}

export default CheckOut