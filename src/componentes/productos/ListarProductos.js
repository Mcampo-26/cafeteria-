import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const ListarProductos = (props) => {
  return (
    <Container>
      <h1 className="text-center my-5">Lista de productos</h1>
      <ListGroup className="my-5">
        {
          props.productosP.map((productoObjeto)=><ItemProducto productoProps={productoObjeto}key={productoObjeto.id} consultarApi={props.actualizarApi}></ItemProducto>)
        }
      
      </ListGroup>
    </Container>
  );
};

export default ListarProductos;
