import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import ListarProductos from "./componentes/productos/ListarProductos";
import AgregarProducto from "./componentes/productos/AgregarProducto";
import Navegacion from "./componentes/common/Navegacion";
import Footer from "./componentes/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect}from "react";
import EditarProducto from "./componentes/productos/EditarProducto";
import Error404 from "./componentes/Error404";


function App() {
  const URL = process.env.REACT_APP_API_URL;
 
  const [productos, setProductos]=useState([]);
  useEffect(()=>{
    consultarApi();
  },[]);
  const consultarApi= async()=>{
    try{
      const respuesta= await fetch(URL);
      
      if(respuesta.status===200){
        const listaProductos =await respuesta.json();
        setProductos(listaProductos);
      }
    }catch(error){
      console.log(error)
    }
  };

  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/productos">
          <ListarProductos productosP={productos} actualizarApi={consultarApi}></ListarProductos>
        </Route> 
        <Route exact path="/productos/nuevo">
          <AgregarProducto consultalistaProductos={consultarApi}></AgregarProducto>
        </Route>
        <Route exact path="/productos/editar/:id">
          <EditarProducto consultalistaProductos={consultarApi}></EditarProducto>
        </Route>
        <Route path='*'>
        <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
   );
}

export default App;
