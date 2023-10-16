import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../Firebase/Configuracion";

export const ItemContainerList = (props) => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("productos")
  const categoria = useParams().categoria
  

  useEffect(() => {

    const productosReferencia = collection(database, "Productos")
    const q= categoria ? query(productosReferencia, where("categoria", "==", categoria)) : productosReferencia;
    getDocs(q)
    .then((response)=>{
      

      setProductos(
        response.docs.map((doc)=>{
          return{...doc.data(), id: doc.id}
        })
      )
    })
  }, [categoria]);

  return (
    <div>
      <h2 className="main-title">{props.mensaje}</h2>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemContainerList;
