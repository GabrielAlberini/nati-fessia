import { useEffect, useState } from "react";
import { cerrarSesion } from "../../functions/signOut";
import { Container, Stack, Button, Table } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {
  getAllWorks,
  getAllExperiment,
  getAllFotografico,
  getAllGrupalWork,
} from "../../functions/getAll";
import {
  deleteExperiment,
  deleteWork,
  deleteFotografic,
  deleteGrupalWork,
} from "../../functions/delete";
import { AñadirModal } from "../../components/AñadirModal/AñadirModal";
import { EditarModal } from "../../components/EditarModal/EditarModal";

const Home = () => {
  const [portfolioWorks, setPortfolioWorks] = useState([]);
  const [expetimentWork, setExpetimentWork] = useState([]);
  const [fotograficWork, setFotograficWork] = useState([]);
  const [grupalWork, setGrupalWork] = useState([]);
  const [isModalAñadir, setIsModalAñadir] = useState(false);
  const [isModalEditar, setIsModalEditar] = useState(false);
  const [productoEDitar, setProductoEditar] = useState({});

  //Actualizar Trabajos de Portfolio
  function updateWorks() {
    getAllWorks().then((workList) => {
      setPortfolioWorks(workList);
    });
    getAllExperiment().then((workList) => {
      setExpetimentWork(workList);
    });
    getAllFotografico().then((workList) => {
      setFotograficWork(workList);
    });
    getAllGrupalWork().then((workList) => {
      setGrupalWork(workList);
    });
  }

  function addWork() {
    setIsModalAñadir(true);
  }

  useEffect(() => {
    updateWorks();
  }, []);

  return (
    <Container>
      <AñadirModal
        isModalAñadir={isModalAñadir}
        setIsModalAñadir={setIsModalAñadir}
        actualizarEstadoProductos={updateWorks}
      />
      {productoEDitar && (
        <EditarModal
          isModalEditar={isModalEditar}
          setIsModalEditar={setIsModalEditar}
          actualizarEstadoProductos={updateWorks}
          productoEditar={productoEDitar}
          setProductoEditar={setProductoEditar}
        />
      )}
      <Stack direction="horizontal" className="justify-content-between p-3">
        <Link to="/">
          <div style={{ width: 200 }}>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/kQqpbmv/imagen-natifessia-Mesa-de-trabajo-1.png"
              alt=""
            />
          </div>
        </Link>
        <h1>¡Hola, Nati!</h1>
        <div>
          <Link to="/">
            <Button>Ir a inicio</Button>
          </Link>
          <Button className="m-3" onClick={cerrarSesion}>Cerrar sesion</Button>
        </div>
      </Stack>
      <hr />
      <Stack direction="horizontal" className="justify-content-between p-3">
        <h2>Portfolio / Clientes</h2>
        <Button onClick={addWork}> Añadir trabajo</Button>
      </Stack>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Imágen resumen</th>
            <th>Categoría</th>
            <th>Web</th>
            <th>Hashtag</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {portfolioWorks &&
            portfolioWorks.map((prod, index) => (
              <tr key={prod.sku}>
                <td>{prod.sku}</td>
                <td>{prod.cliente}</td>
                <td style={{ width: 100 }}>
                  <img
                    style={{ width: 100 }}
                    src={prod.URLimagen}
                    alt="imágen de trabajo"
                  ></img>
                </td>
                <td>{prod.categoria}</td>
                <td>
                  <a href={prod.web} rel="noreferrer">
                    {prod.web}
                  </a>
                </td>
                <td>{prod.hashtag}</td>
                <td>
                  <Button
                    className="m-1"
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({ ...prod });
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      deleteWork(prod).then((confirmacion) => {
                        updateWorks();
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
      {/*|||||| EXPERIMENTOS GRÁFICOS ||||||*/}
      <Stack direction="horizontal" className="justify-content-between p-3">
        <h2>Experimento gráficos</h2>
      </Stack>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Imágen resumen</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {expetimentWork &&
            expetimentWork.map((prod, index) => (
              <tr key={prod.sku}>
                <td>{prod.sku}</td>
                <td>{prod.cliente}</td>
                <td style={{ width: 100 }}>
                  <img
                    style={{ width: 100 }}
                    src={prod.URLimagen}
                    alt="imágen de trabajo"
                  ></img>
                </td>
                <td>{prod.categoria}</td>
                <td>
                  <Button
                    className="m-1"
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({ ...prod });
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      deleteExperiment(prod).then((confirmacion) => {
                        updateWorks();
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
      {/*|||||| EXPERIMENTOS FOTOGRÁFICOS ||||||*/}
      <Stack direction="horizontal" className="justify-content-between p-3">
        <h2>Experimentos fotográficos</h2>
      </Stack>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Imágen resumen</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {fotograficWork &&
            fotograficWork
              .sort((a, b) => {
                return b - a;
              })
              .map((prod, index) => (
                <tr key={prod.sku}>
                  <td>{prod.sku}</td>
                  <td>{prod.cliente}</td>
                  <td style={{ width: 100 }}>
                    <img
                      style={{ width: 100 }}
                      src={prod.URLimagen}
                      alt="imágen de trabajo"
                    ></img>
                  </td>
                  <td>{prod.categoria}</td>
                  <td>
                    <Button
                      className="m-1"
                      variant="dark"
                      onClick={() => {
                        setProductoEditar({ ...prod });
                        setIsModalEditar(true);
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() =>
                        deleteFotografic(prod).then((confirmacion) => {
                          updateWorks();
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
      {/*|||||| EXPERIMENTOS TRABAJO EN CONJUNTO ||||||*/}
      <Stack direction="horizontal" className="justify-content-between p-3">
        <h2>Trabajos en conjunto</h2>
      </Stack>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Cliente</th>
            <th>Imágen resumen</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {grupalWork &&
            grupalWork.map((prod, index) => (
              <tr key={prod.sku}>
                <td>{index + 1}</td>
                <td>{prod.sku}</td>
                <td>{prod.cliente}</td>
                <td style={{ width: 100 }}>
                  <img
                    style={{ width: 100 }}
                    src={prod.URLimagen}
                    alt="imágen de trabajo"
                  ></img>
                </td>
                <td>{prod.categoria}</td>
                <td>
                  <Button
                    className="m-1"
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({ ...prod });
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      deleteGrupalWork(prod).then((confirmacion) => {
                        updateWorks();
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
    </Container>
  );
};

export { Home };
