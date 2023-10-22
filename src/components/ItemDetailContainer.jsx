import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {doc, getDoc} from 'firebase/firestore'
import { database } from '../Firebase/Configuracion'

const ItemDetailContainer = () => {

    const[item, setItem] = useState (null)

    const id= useParams().id
    
    useEffect(()=>{
       const docReferencia = doc(database, "Productos", id)
       getDoc(docReferencia)
       .then((response)=>{
        setItem(
          {...response.data(), id:response.id}
          )
       })

    },[id])
  return (
    <div>
        {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer