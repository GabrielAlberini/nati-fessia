import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const Detail = ({
  isModalEditar,
  setIsModalEditar,
  productoEditar,
  setProductoEditar,
}) => {
  const [productoEstado, setProductoEstado] = useState({});

  useEffect(() => {
    setProductoEstado({ ...productoEditar });
  }, [productoEditar]);

  return (
    <Modal
      show={isModalEditar}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => {
        setIsModalEditar(false);
        setProductoEditar(null);
      }}
    >
      <section className="modal-detail">
        <div
          className="close-detail"
          onClick={() => {
            setIsModalEditar(false);
            setProductoEditar(null);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </div>
        <h2 className="title-detail">{productoEstado.cliente}</h2>
        <h5>{productoEstado.descripcion}</h5>
        <article>
          <div className="main-img-detail">
            {productoEstado.foto1 && (
              <div className="container-img-detail">
                <img
                  className="img-detail"
                  src={productoEstado.foto1}
                  alt="foto descriptiva"
                />
              </div>
            )}
            {productoEstado.foto2 && (
              <div className="container-img-detail">
                <img
                  className="img-detail"
                  src={productoEstado.foto2}
                  alt="foto descriptiva"
                />
              </div>
            )}
            {productoEstado.foto3 && (
              <div className="container-img-detail">
                <img
                  className="img-detail"
                  src={productoEstado.foto3}
                  alt="foto descriptiva"
                />
              </div>
            )}
            {productoEstado.foto4 && (
              <div className="container-img-detail">
                <img
                  className="img-detail"
                  src={productoEstado.foto4}
                  alt="foto descriptiva"
                />
              </div>
            )}
            {productoEstado.foto5 && (
              <div className="container-img-detail">
                <img
                  className="img-detail"
                  src={productoEstado.foto5}
                  alt="foto descriptiva"
                />
              </div>
            )}
            {productoEstado.foto6 && (
              <div className="container-img-detail">
                <img
                  className="img-detail"
                  src={productoEstado.foto6}
                  alt="foto descriptiva"
                />
              </div>
            )}
          </div>
          <a
            href={`https://${productoEstado.web}`}
            rel="noreferrer"
            target="_blank"
          >
            {productoEstado.web}
          </a>
          <h5 className="title-detail">{productoEstado.categoria}</h5>
          <span className="title-detail">{productoEstado.hashtag}</span>
        </article>
      </section>
    </Modal>
  );
};

export { Detail };
