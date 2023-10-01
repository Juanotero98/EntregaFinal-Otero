import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from './Ayuda/Pedirdatos'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const[item, setItem] = useState (null)
    const id= useParams().id

    useEffect(()=>{
        pedirItemPorId(Number(id))
        .then((response)=>{
            setItem(response);
        })

    },[id])
  return (
    <div>
        {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer