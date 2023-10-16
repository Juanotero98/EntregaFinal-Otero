import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children})=>{

    const [carrito, setCarrito] = useState(carritoInicial)

  const AgregarAlCarrito = (item, cantidad)=> {
    const itemAgregado = {...item, cantidad}
    const nuevoCarrito = [...carrito]
    const itemDentroDelCarrito = nuevoCarrito.find((producto)=> producto.id === itemAgregado.id)

    if (itemDentroDelCarrito){
      itemDentroDelCarrito.cantidad +=  cantidad;
      
    }else{
      nuevoCarrito.push(itemAgregado)
    }
    setCarrito(nuevoCarrito)
    
  }

  const cantidadEnCarrito = ()=>{
    return carrito.reduce((acumulador, producto)=> acumulador + producto.cantidad, 0)
  }

  const precioTotal = ()=>{
    return carrito.reduce((acumulador, producto)=> acumulador + producto.precio * producto.cantidad, 0)
  }

  const vaciarCarrito = ()=>{
    setCarrito([])
  }

  useEffect(()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito))

  },[carrito])

 
  

  return (
  <CartContext.Provider value={{carrito, AgregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
    {children}
  </CartContext.Provider>
  )

}