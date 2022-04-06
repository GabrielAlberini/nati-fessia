import { useEffect, useState } from "react";
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { addWork, addExperiment, addFotografico } from "../../functions/add";

const EditarModal = ({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoProductos,
  productoEditar,
  setProductoEditar,
}) => {
  const [productoEstado, setProductoEstado] = useState({});
  console.log(productoEstado)

  function editarProductoModal() {
    const URLimagen = document.getElementById("URLimagen").value;
    const categoria = document.getElementById("categoria").value;
    const cliente = document.getElementById("cliente").value;
    const web = document.getElementById("web").value;
    const hashtag = document.getElementById("hashtag").value;
    const sku = document.getElementById("sku").value;
    const infoProducto = { cliente, URLimagen, categoria, web, hashtag, sku };
    switch (productoEstado.selectWork) {
      case "1":
        addWork(infoProducto);
        break;
      case "2":
        addExperiment(infoProducto);
        break;
      case "3":
        addFotografico(infoProducto);
        break;
      default:
        console.log("hola");
    }
    setProductoEditar(null);
    actualizarEstadoProductos();
    setIsModalEditar(false);
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProductoEstado({ ...productoEstado, [name]: value });
  };

  useEffect(() => {
    setProductoEstado({ ...productoEditar });
  }, [productoEditar]);

  return (
    <Modal
      show={isModalEditar}
      onHide={() => {
        setIsModalEditar(false);
        setProductoEditar(null);
      }}
    >
      <Modal.Header>
        <Modal.Title>Editar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Label>ID <span style={{color: "red", fontSize: 10}}>solo de lectura*</span></Form.Label>
            <Form.Control
              id="sku"
              placeholder="ID de la imágen"
              type="text"
              className="mb-2"
              value={productoEstado?.sku}
              name="sku"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Cliente</Form.Label>
            <Form.Control
              id="cliente"
              placeholder="Nombre del cliente"
              type="text"
              className="mb-2"
              value={productoEstado?.cliente}
              name="cliente"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>URL imágen detalle</Form.Label>
            <Form.Control
              id="URLimagen"
              placeholder="URL de la imágen"
              type="text"
              className="mb-2"
              value={productoEstado?.URLimagen}
              name="URLimagen"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              id="categoria"
              placeholder="Categoría del trabajo"
              type="text"
              className="mb-2"
              value={productoEstado?.categoria}
              name="categoria"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>URL del sitio WEB</Form.Label>
            <Form.Control
              id="web"
              placeholder="URL del sitio WEB"
              type="text"
              className="mb-2"
              value={productoEstado?.web}
              name="web"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              id="descripcion"
              placeholder="Hashtags relacionados"
              type="text"
              className="mb-2"
              value={productoEstado?.descripcion}
              name="descripcion"
              onChange={(e) => handleChange(e)}
            />
            <Form.Label>Hashtags</Form.Label>
            <Form.Control
              id="hashtag"
              placeholder="Hashtags relacionados"
              type="text"
              className="mb-2"
              value={productoEstado?.hashtag}
              name="hashtag"
              onChange={(e) => handleChange(e)}
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditar(false);
            setProductoEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarProductoModal}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { EditarModal };
