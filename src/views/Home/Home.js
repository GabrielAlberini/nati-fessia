import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllWorks,
  getAllExperiment,
  getAllFotografico,
  getAllGrupalWork,
  getAllLaminas,
} from "../../functions/getAll";
import { Detail } from "../Detail/Detail";
import { Loader } from "../../components/Loader/Loader";
import { MenuHamburguesa } from "../../components/MenuHamburguesa/MenuHamburguesa";
import "./Home.css";
import { Experiencia } from "../../components/Experiencia/Experiencia";
import { ScrollButton } from '../../components/BotonIrArriba/BotonIrArriba'
import { Contacto } from "../../components/Contacto/Contacto";

const Home = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [experimentos, setExperimentos] = useState([]);
  const [fotograficos, setFotograficos] = useState([]);
  const [grupalWork, setGrupalWork] = useState([]);
  const [laminas, setLaminas] = useState([]);
  const [isModalEditar, setIsModalEditar] = useState();
  const [productoEDitar, setProductoEditar] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [showExperiencia, setShowExperiencia] = useState(false);
  const [contacto, setContacto] = useState(false);


  useEffect(() => {
    getAllWorks().then((data) => {
      setPortfolio(data);
    });
    getAllExperiment().then((data) => {
      setExperimentos(data);
    });
    getAllFotografico().then((data) => {
      setFotograficos(data);
    });
    getAllGrupalWork().then((data) => {
      setGrupalWork(data);
    });
    getAllLaminas().then((data) => {
      setLaminas(data);
    });
  }, []);

  return (
    <>
      <header>
        <div className="container-header-img">
          <img className="header-img" src="/logo.png" alt="logo nati fessia" />
        </div>
        <div className="container-header-txt">
          <p>Arte gráfico / Diseños / Collages</p>
          <h1>
            www<span>.natifessia.</span>com.ar
          </h1>
          <p>analógico - digital</p>
        </div>
        <button
          onClick={() => setModalShow(!modalShow)}
          className="container-menu-hambur"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          </svg>
        </button>
      </header>
      <ScrollButton />
      <MenuHamburguesa
        setModalShow={setModalShow}
        modalShow={modalShow}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Experiencia
        setShowExperiencia={setShowExperiencia}
        show={showExperiencia}
        onHide={() => setShowExperiencia(false)}
      />
      <Contacto
        setContacto={setContacto}
        show={contacto}
        onHide={() => setContacto(false)}
      />
      <main>
        <aside>
          <nav>
            <a
              href="https://www.instagram.com/natifessia/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="icon-instagram"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <Link
            to="/"
            className="link-experiencia"
            onClick={() => {
              setContacto(!contacto);
              setModalShow(false);
            }}
          >
            CONTACTO
          </Link>
            <Link
              to="/"
              className="link-experiencia"
              onClick={() => setShowExperiencia(!showExperiencia)}
            >
              EXPERIENCIA
            </Link>
            <Link
              className="link-tienda"
              to="/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cont-img-nati">
                <img src="/nati.png" alt="foto de nati" />
              </div>
            </Link>
            <a
              className="link-trabajos-conjunto"
              href="https://www.instagram.com/natifessia/"
              target="_blank"
              rel="noreferrer"
            >
              TRABAJOS EN CONJUNTO
            </a>
            <ul className="lista-trabajo-conjunto">
              {grupalWork.map((work) => (
                <li key={work.sku}>
                  <Link
                    to="/"
                    onClick={() => {
                      setProductoEditar({ ...work });
                      setIsModalEditar(true);
                    }}
                  >
                    <div className="container-img-trabajo-conjunto">
                      <img
                        className="img-trabajo-conjunto"
                        src={work.URLimagen}
                        alt="imagen de trabajo en conjunto"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <a
              className="link-trabajos-conjunto"
              href="https://www.instagram.com/natifessia/"
              target="_blank"
              rel="noreferrer"
            >
              LÁMINAS
            </a>
            <ul className="lista-trabajo-conjunto">
              {laminas.map((work) => (
                <li key={work.sku}>
                  <Link
                    to="/"
                    onClick={() => {
                      setProductoEditar({ ...work });
                      setIsModalEditar(true);
                    }}
                  >
                    <div className="container-img-trabajo-conjunto">
                      <img
                        className="img-trabajo-conjunto"
                        src={work.URLimagen}
                        alt="imagen de trabajo en conjunto"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <section className="section-trabajos">
          {productoEDitar && (
            <Detail
              isModalEditar={isModalEditar}
              setIsModalEditar={setIsModalEditar}
              productoEditar={productoEDitar}
              setProductoEditar={setProductoEditar}
            />
          )}
          <article>
            <h3>PORTFOLIO / CLIENTES</h3>
            {portfolio.length === 0 ? (
              <Loader />
            ) : (
              <div className="container-trabajos-portfolio">
                {portfolio.map((work) => (
                  <Link
                    to="/"
                    key={work.sku}
                    onClick={() => {
                      setProductoEditar({ ...work });
                      setIsModalEditar(true);
                    }}
                  >
                    <div className="container-img-portfolio">
                      <img
                        className="img-portfolio"
                        src={work.URLimagen}
                        alt={work.URLimagen}
                      />
                      <h4>{work.cliente}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </article>
          <article>
            <h3>EXPERIMENTOS GRÁFICOS</h3>
            {experimentos.length === 0 ? (
              <Loader />
            ) : (
              <div className="container-trabajos-graficos">
                {experimentos.map((work) => (
                  <Link
                    to="/"
                    key={work.sku}
                    onClick={() => {
                      setProductoEditar({ ...work });
                      setIsModalEditar(true);
                    }}
                  >
                    <div className="container-img-graficos">
                      <img
                        className="img-graficos"
                        src={work.URLimagen}
                        alt={work.URLimagen}
                      />
                      <h4>{work.cliente}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </article>
          <article id="experiencias-fotograficas">
            <h3>EXPERIMENTOS FOTOGRÁFICOS</h3>
            {fotograficos.length === 0 ? (
              <Loader />
            ) : (
              <div className="container-trabajos-graficos">
                {fotograficos.map((work) => (
                  <Link
                    to="/"
                    key={work.sku}
                    onClick={() => {
                      setProductoEditar({ ...work });
                      setIsModalEditar(true);
                    }}
                  >
                    <div className="container-img-graficos">
                      <img
                        className="img-graficos"
                        src={work.URLimagen}
                        alt={work.URLimagen}
                      />
                      <h4>{work.cliente}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </article>
          <article
            id="experiencias-graficas"
            className="section-trabajos-conjunto"
          >
            <h3>TRABAJOS EN CONJUNTO</h3>
            <div className="container-trabajos-graficos">
              {grupalWork.map((work) => (
                <Link
                  to="/"
                  onClick={() => {
                    setProductoEditar({ ...work });
                    setIsModalEditar(true);
                  }}
                >
                  <div key={work.sku} className="container-img-graficos">
                    <img
                      className="img-graficos"
                      src={work.URLimagen}
                      alt={work.URLimagen}
                    />
                    <h4>{work.cliente}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </article>
          <article id="laminas" className="section-trabajos-conjunto">
            <h3>LÁMINAS</h3>
            <div className="container-trabajos-graficos">
              {laminas.map((work) => (
                <Link
                  to="/"
                  onClick={() => {
                    setProductoEditar({ ...work });
                    setIsModalEditar(true);
                  }}
                >
                  <div key={work.sku} className="container-img-graficos">
                    <img
                      className="img-graficos"
                      src={work.URLimagen}
                      alt={work.URLimagen}
                    />
                    <h4>{work.cliente}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </article>
        </section>
      </main>
      <footer>
        Sitio desarrollado por{" "}
        <a
          href="https://gabrielalberini.com.ar"
          target="_blank"
          rel="noreferrer"
        >
          Gabriel Alberini
        </a>
      </footer>
    </>
  );
};

export { Home };
