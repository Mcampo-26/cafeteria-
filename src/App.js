import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import ListarProductos from "./componentes/productos/ListarProductos";
import AgregarProducto from "./componentes/productos/AgregarProducto";
import Navegacion from "./componentes/common/Navegacion";
import Footer from "./componentes/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/productos">
          <ListarProductos></ListarProductos>
        </Route>
        <Route exact path="/productos/nuevo">
          <AgregarProducto></AgregarProducto>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
