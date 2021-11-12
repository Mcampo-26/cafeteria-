import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import { useParams,withRouter } from "react-router-dom";
import { campoRequerido, rangoPrecio } from "../common/helpers";

const EditarProducto = (props) => {
  //obtener el paramerto
  //const codProducto= useParams().id;
  const codProducto = useParams().id;
  // creo los state
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);
  const [producto, SetProducto] = useState({});
  const URL = process.env.REACT_APP_API_URL + "/" + codProducto;
  // aqui creo la variables de useRef
  const nombreProductoRef = useRef("");
  const precioProductoRef = useRef(0);

  useEffect(async () => {
    try {
      const respuesta = await fetch(URL);
      if (respuesta.status === 200) {
        const productoSolicitado = await respuesta.json();
        SetProducto(productoSolicitado);
      }
    } catch (error) {
      console.log(error);
      // mostrar un mensaje de error
    }
  }, []);

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let categoriaModificada = categoria === "" ? producto.categoria : categoria;
    
    //console.log (nombreProductoRef.current.value);
    //validar datos
    if (
      campoRequerido(nombreProductoRef.current.value) &&  
      rangoPrecio(parseFloat(precioProductoRef.current.value)) &&
      campoRequerido(categoriaModificada)
    ) {
      setError(false);

      try{
        const productoModificado = {
          nombreProducto: nombreProductoRef.current.value,
          precioProducto: precioProductoRef.current.value,
          categoria: categoriaModificada          
        }
        const respuesta= await fetch(URL,{
          method:'PUT',
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify(productoModificado)
        });
              
        if(respuesta.status===200){
          Swal.fire(
            'producto modificado',
            'se acualizaron los datos del producto',
            'success'
          )
            props.consultalistaProductos();
            props.history.push('/productos');

        }
      }catch(error) {
        console.log(error);
      
      }
    } else{
      setError(true);
    }
  
  
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center my-5">Editar Producto</h1>
        <Form.Group>
          <Form.Label>Nombre del Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="te"
            defaultValue={producto.nombreProducto}
            ref={nombreProductoRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio Producto</Form.Label>
          <Form.Control
            type="number"
            placeholder="40"
            defaultValue={producto.precioProducto}
            ref={precioProductoRef}
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
            defaultChecked={producto.categoria && producto.categoria === "bebidaCaliente"
            }
          ></Form.Check>
          <Form.Check
            name="categoria"
            type="radio"
            label="Bebida Fría"
            value="bebibaFría"
            onChange={cambiarCategoria}
            inline
            defaultChecked={
              producto.categoria && producto.categoria === "bebibaFría"
            }
          ></Form.Check>
          <Form.Check
            name="categoria"
            type="radio"
            label="Dulce"
            value="Dulce"
            onChange={cambiarCategoria}
            inline
            defaultChecked={
              producto.categoria && producto.categoria === "Dulce"
            }
          ></Form.Check>
          <Form.Check
            name="categoria"
            type="radio"
            label="Salado"
            value="Salado"
            onChange={cambiarCategoria}
            inline
            defaultChecked={
              producto.categoria && producto.categoria === "Salado"
            }
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

export default withRouter (EditarProducto);
