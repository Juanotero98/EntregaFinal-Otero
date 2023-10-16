import {  useContext, useState } from "react"
import ItemCount from "./ItemCount.jsx"
import { CartContext } from "../context/CartContext.jsx"


const ItemDetail = ({item}) => {

  const {carrito, AgregarAlCarrito} = useContext(CartContext)
  console.log(carrito)

  

  const [cantidad, setCantidad]= useState(1)

  const handleRestar= () =>{
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = ()=>{
      cantidad < item.stock && setCantidad (cantidad + 1)
  }

  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="precio">${item.precio}</p>
                <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={()=>{AgregarAlCarrito(item, cantidad)}}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail