import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";

const ItemProducto = (props) => {
  const eliminarProducto = (id) => {
    Swal.fire({
      title: "Esta seguro de eliminar el producto?",
      text: "no puede volver atras estas, luego de eliminar !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // agregar la logica para borrar el producto
        try {
          const URL = `${process.env.REACT_APP_API_URL}/${id}`;
          console.log(URL);
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
          });
          if (respuesta.status === 200) {
            //muestro el  cartel al usuario
            Swal.fire(
              "Producto eliminado",
              "El producto seleccionado fue correctamete eliminado",
              "success"
            );
            // actualizar los datos
            props.consultarApi();
          }
        } catch (error) {
          console.log(error);
          Swal.fire("ocurrior un errror", "Intentelo en unos minutos", "error");
        }
      }
    });
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        {props.productoProps.nombreProducto}
        <span className="font-weight bold">
          {props.productoProps.precioProducto}
        </span>
      </p>
      <div>
        <Button variant="warning" className="me-3">
          Editar
        </Button>
        <Button
          variant="danger"
          onClick={() => eliminarProducto(props.productoProps.id)}
        >
          borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemProducto;
