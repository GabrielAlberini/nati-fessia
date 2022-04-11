import { Modal, Stack, Form, Button } from "react-bootstrap";
import {
  addExperiment,
  addFotografico,
  addWork,
  addGrupalWork,
  addLaminas,
} from "../../functions/add";

const AñadirModal = ({
  isModalAñadir,
  setIsModalAñadir,
  actualizarEstadoProductos,
}) => {
  function añadirProductoModal() {
    const sku = document.getElementById("sku").value;
    const selectWork = document.getElementById("selectWork").value;
    const cliente = document.getElementById("cliente").value;
    const URLimagen = document.getElementById("URLimagen").value;
    const categoria = document.getElementById("categoria").value;
    const web = document.getElementById("web").value;
    const descripcion = document.getElementById("descripcion").value;
    const hashtag = document.getElementById("hashtag").value;

    //Imagenes descriptivas
    const foto1 = document.getElementById("URLimagen1").value;
    const foto2 = document.getElementById("URLimagen2").value;
    const foto3 = document.getElementById("URLimagen3").value;
    const foto4 = document.getElementById("URLimagen4").value;
    const foto5 = document.getElementById("URLimagen5").value;
    const foto6 = document.getElementById("URLimagen6").value;
    const infoProducto = {
      selectWork,
      cliente,
      URLimagen,
      categoria,
      web,
      descripcion,
      hashtag,
      sku,
      foto1,
      foto2,
      foto3,
      foto4,
      foto5,
      foto6,
    };

    switch (selectWork) {
      case "1":
        addWork(infoProducto);
        break;
      case "2":
        addExperiment(infoProducto);
        break;
      case "3":
        addFotografico(infoProducto);
        break;
      case "4":
        addGrupalWork(infoProducto);
        break;
      case "5":
        addLaminas(infoProducto);
        break;
      default:
        console.log("No existe esa opción");
    }
    actualizarEstadoProductos();
    setIsModalAñadir(false);
  }

  return (
    <Modal show={isModalAñadir} onHide={() => setIsModalAñadir(false)}>
      <Modal.Header>
        <Modal.Title>Añadir producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Select
              id="selectWork"
              className="mb-2"
              aria-label="Default select example"
            >
              <option>Seleccione el tipo de trabajo</option>
              <option value="1">Trabajo de portfolio</option>
              <option value="2">Experimento gráfico</option>
              <option value="3">Experimento fotográficos</option>
              <option value="4">Trabajo en conjunto</option>
              <option value="5">Láminas</option>
            </Form.Select>
            <Form.Label>
              ID{" "}
              <span style={{ color: "red", fontSize: 10 }}>obligatorio*</span>
            </Form.Label>
            <Form.Control
              id="sku"
              placeholder="Inserte ID"
              type="text"
              className="mb-2"
            />
            <Form.Label>Cliente</Form.Label>
            <Form.Control
              id="cliente"
              placeholder="Inserte nombre del cliente"
              type="text"
              className="mb-2"
            />
            <Form.Label>URL imágen detalle</Form.Label>
            <Form.Control
              id="URLimagen"
              placeholder="Interse el URL de la imágen"
              type="text"
              className="mb-2"
            />
            <Form.Label>Fotos descriptivas</Form.Label>
            <Form.Control
              id="URLimagen1"
              placeholder="Inserte el URL de la imágen descriptiva"
              type="text"
              className="mb-2"
            />
            <Form.Control
              id="URLimagen2"
              placeholder="Inserte el URL de la imágen descriptiva"
              type="text"
              className="mb-2"
            />
            <Form.Control
              id="URLimagen3"
              placeholder="Inserte el URL de la imágen descriptiva"
              type="text"
              className="mb-2"
            />
            <Form.Control
              id="URLimagen4"
              placeholder="Inserte el URL de la imágen descriptiva"
              type="text"
              className="mb-2"
            />
            <Form.Control
              id="URLimagen5"
              placeholder="Inserte el URL de la imágen descriptiva"
              type="text"
              className="mb-2"
            />
            <Form.Control
              id="URLimagen6"
              placeholder="Inserte el URL de la imágen descriptiva"
              type="text"
              className="mb-2"
            />

            <Form.Label>Categoría</Form.Label>
            <Form.Control
              id="categoria"
              placeholder="Inserte la categoría"
              type="text"
              className="mb-2"
            />
            <Form.Label>URL del sitio WEB</Form.Label>
            <Form.Control
              id="web"
              placeholder="Inserte URL del sitio WEB"
              type="text"
              className="mb-2"
            />
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              id="descripcion"
              placeholder="Ingresa la descripción"
              type="text"
              className="mb-2"
            />
            <Form.Label>Hashtag</Form.Label>
            <Form.Control
              id="hashtag"
              placeholder="Inserte los hashtag separados por espacios"
              type="text"
              className="mb-2"
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalAñadir(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={añadirProductoModal}>
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { AñadirModal };
