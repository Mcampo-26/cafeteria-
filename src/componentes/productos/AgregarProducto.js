import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from 'sweetalert2'

const AgregarProducto = (props) => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  const URL = process.env.REACT_APP_API_URL;

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    // validar los datos
    if (
      nombreProducto.trim() === "" ||
      precioProducto <= 0 ||
      precioProducto > 5000 ||
      categoria === ""
    ) {
      // si falla la validacion , mostrar el alert de error
      setError(true);
      return;
    } else {
      setError(false);
      // si esta todo bien , envio los datos a la api
      const producto ={
        nombreProducto: nombreProducto,
        precioProducto: precioProducto,
        categoria: categoria
        // prodia escribirlo tmb como esta abajo
        //nombreProducto,
       // precioProducto,
       // categoria
       // solo si coincide el nombre del estate con el nombre de la variable almacenada ahi
      }
      
      try {//aca escribo normalmente el codigo de interaccion con la Api
        const datosEnviar ={
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(producto)

        }
        const respuesta = await fetch(URL,datosEnviar)
        
        if (respuesta.status===201){
          //mostar un cartel al usuario
          Swal.fire(
            'producto agregado',
            'se ha registrado un producto nuevo',
            'success'
          )
          props.consultalistaProductos();
           // redireccionar
           props.history.push('/productos');

        }

      }catch(error){
        
        // se puede mostrar cartel al usuario de que la operacion no se pudo realizar
        Swal.fire(
          'ocurrior un errror',
          'Intentelo en unos minutos',
          'error'
        )
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center my-5">Agregar producto</h1>
        <Form.Group>
          <Form.Label>Nombre del Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="te"
            onChange={(e) => setNombreProducto(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio Producto</Form.Label>
          <Form.Control
            type="number"
            placeholder="40"
            onChange={(e) => setPrecioProducto(parseInt(e.target.value))}
          ></Form.Control>
        </Form.Group>
        <h3 className="text-center my-3">Categoría</h3>
        <div className="text-center my-4">
          <Form.Check
            name="categoria"
            type="radio"
            label="Bebida Caliente"
            value="bebidaCaliente"
            onChange={cambiarCategoria}
            inline
          ></Form.Check>
          <Form.Check
            name="categoria"
            type="radio"
            label="Bebida Fría"
            value="bebibaFría"
            onChange={cambiarCategoria}
            inline
          ></Form.Check>
          <Form.Check
            name="categoria"
            type="radio"
            label="Dulce"
            value="Dulce"
            onChange={cambiarCategoria}
            inline
          ></Form.Check>
          <Form.Check
            name="categoria"
            type="radio"
            label="Salado"
            value="Salado"
            onChange={cambiarCategoria}
            inline
          ></Form.Check>
        </div>
        <Button variant="danger" className="w-10 mb-4" type="submit">
          guardar
        </Button>
        {error === true ? (
          <Alert variant="warning">Todos los campos son obligatorios</Alert>
        ) : null}
      </Form>
    </Container>
  );
};

<h1>Pagina para agregar productos</h1>;
export default AgregarProducto;
