import { useEffect, useState } from "react";
import { pedirDatos } from "../components/Ayuda/Pedirdatos";
import ItemList from "./ItemList";

export const ItemContainerList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirDatos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemContainerList;
