
import React, {useState} from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const AgregarProducto = () => {
    const [nombreProducto, setNombreProducto]=useState("");
    const [precioProducto, setPrecioProducto]= useState("");
    const [categoria, setCategoria]= useState("");

    const cambiarCategoria=(e)=>{
      setCategoria(e.target.value)
    }

  return (
    <Container>
      <Form>
        <h1 className="text-center my-5">Agregar producto</h1>
        <Form.Group>
          <Form.Label>Nombre del Producto</Form.Label>
          <Form.Control type="text" placeholder="te" onChange={(e)=>setNombreProducto(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio Producto</Form.Label>
          <Form.Control type="number" placeholder="40" onChange={(e)=>setPrecioProducto(parseInt(e.target.value))}></Form.Control>
        </Form.Group>
        <h3 className="text-center my-3">Categoría</h3>
        <div className="text-center my-4">
          <Form.Check
            name="categoria"
            type="radio"
            label="Bebida Caliente"
            value= "bebidaCaliente"
            onChange={cambiarCategoria}
            inline
          ></Form.Check>
          <Form.Check
            name="categoria"
            type="radio"
            label="Bebida Fría"
            value ="bebibaFría"
            onChange={cambiarCategoria}
            inline
          ></Form.Check>
          <Form.Check
            name="categoria"
            type="radio"
            label="Dulce"
            inline
          ></Form.Check>
          <Form.Check
            name="categoria"
            type="radio"
            label="Salado"
            inline
          ></Form.Check>
        </div>
        <Button variant="danger" className="w-10 mb-4">
          guardar
        </Button>
        <Alert variant="warning">Todos los campos son obligatorios </Alert>
      </Form>
    </Container>
  );
};

<h1>Pagina para agregar productos</h1>;
export default AgregarProducto;
