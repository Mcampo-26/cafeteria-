import React from "react";
import {Button, ListGroup } from "react-bootstrap";

const ItemProducto = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
     <p>{props.productoProps.nombreProducto}<span className="font-weight bold">{props.productoProps.precioProducto}</span></p>
      <div>
        <Button variant="warning" className="me-3">Editar</Button>
        <Button variant="danger">borrar</Button>
      </div>
     
    </ListGroup.Item>
  );
};

export default ItemProducto;
