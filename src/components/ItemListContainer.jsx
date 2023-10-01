import { useEffect, useState } from "react";
import { pedirDatos } from "./Ayuda/Pedirdatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemContainerList = (props) => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("productos")
  const categoria = useParams().categoria
  

  useEffect(() => {
    pedirDatos().then((res) => {
      if(categoria){
        setProductos(res.filter((productos)=> productos.categoria === categoria));
        setTitulo(categoria)

      }else{
        setProductos(res);
        setTitulo("Productos")
      }
      
    });
  }, [categoria]);

  return (
    <div>
      <h2 className="main-title">{props.mensaje}</h2>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemContainerList;
