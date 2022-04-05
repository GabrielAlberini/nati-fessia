import { useEffect, useState } from "react";
import { cerrarSesion } from "../functions/signOut";
import { Container, Stack, Button, Table } from "react-bootstrap";
import { getAllProducts } from "../functions/getAllProducts";
import { deleteProduct } from "../functions/deleteProduct";
import { AñadirModal } from "../components/AñadirModal/AñadirModal";
import { EditarModal } from "../components/EditarModal/EditarModal";

const Home = ({ usuario }) => {
  const [productos, setProductos] = useState([]);
  const [isModalAñadir, setIsModalAñadir] = useState(false);
  const [isModalEditar, setIsModalEditar] = useState(false);
  const [productoEDitar, setProductoEditar] = useState({});

  function actualizarEstadoProductos() {
    getAllProducts().then((listadoDeProductos) => {
      setProductos(listadoDeProductos);
    });
  }

  function añadirProductoHome() {
    setIsModalAñadir(true);
  }

  useEffect(() => {
    actualizarEstadoProductos();
  }, []);

  return (
    <Container>
      <AñadirModal
        isModalAñadir={isModalAñadir}
        setIsModalAñadir={setIsModalAñadir}
        actualizarEstadoProductos={actualizarEstadoProductos}
      />
      {productoEDitar && (
        <EditarModal
          isModalEditar={isModalEditar}
          setIsModalEditar={setIsModalEditar}
          actualizarEstadoProductos={actualizarEstadoProductos}
          productoEditar={productoEDitar}
          setProductoEditar={setProductoEditar}
        />
      )}
      <Stack direction="horizontal" className="justify-content-between">
        <h1>Bienvenido, {usuario.email}</h1>
        <Button onClick={cerrarSesion}>Cerrar sesion</Button>
      </Stack>

      <hr />

      <h2>Productos</h2>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>SKU</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos &&
            productos.map((prod, index) => (
              <tr key={prod.sku}>
                <td>{index + 1}</td>
                <td>{prod.titulo}</td>
                <td>${prod.precio}</td>
                <td>{prod.cantidad}</td>
                <td>{prod.sku}</td>
                <td>
                  <Button
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({...prod});
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      deleteProduct(prod).then((confirmacion) => {
                        actualizarEstadoProductos();
                      })
                    }
                  >
                    Borrar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button onClick={añadirProductoHome}> Añadir Producto</Button>
    </Container>
  );
};

export { Home };
