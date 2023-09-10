import React from 'react'
import Item from './Item'

 const ItemList = ({productos}) => {
  
  return (
    <div className='container'>
      <h2 className='main-title'>Productos</h2>

      <div className="productos">
        {productos.map((productos)=> <Item producto={productos} key={productos.id}/>)}
      </div>
    </div>
    
  )
}

export default ItemList