import ItemContainerList from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import  NavBar  from "./components/NavBar";
import "./main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/Contacto";
import {CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import CheckOut from "./components/CheckOut";

function App() {

  
  return (
    <div className="App">

     <CartProvider>
      
      <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/" element={<ItemContainerList mensaje={"Bienvenidos a Goiri Joyas"}/>}/>
        <Route path="/productos" element={<ItemContainerList/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/productos/:categoria" element={<ItemContainerList/>}/>
        <Route path="/item/:id" element={ <ItemDetailContainer/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
      </Routes>

      </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}


export default App;
