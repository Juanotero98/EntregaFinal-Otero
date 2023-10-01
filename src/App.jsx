import ItemContainerList from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import  NavBar  from "./components/NavBar";
import "./main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route path="/" element={<ItemContainerList mensaje={"Bienvenidos a Goiri Joyas"}/>}/>
        <Route path="/productos" element={<ItemContainerList/>}/>
        <Route path="/productos/:categoria" element={<ItemContainerList/>}/>
        <Route path="/item/:id" element={ <ItemDetailContainer/>}/>

      </Routes>

      
     

      </BrowserRouter>
    </div>
  );
}


export default App;
