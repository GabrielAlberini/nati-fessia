import { useEffect, useState } from "react";
import {
  getAllWorks,
  getAllExperiment,
  getAllFotografico,
  getAllGrupalWork,
} from "../../functions/getAll";
import "./Home.css";

const Home = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [experimentos, setExperimentos] = useState([]);
  const [fotograficos, setFotograficos] = useState([]);
  const [grupalWork, setGrupalWork] = useState([]);

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
  }, []);

  return (
    <>
      <header>
        <div className="container-header-img">
          <img
            className="header-img"
            src="https://i.ibb.co/JC5ZHft/imagen-natifessia-Mesa-de-trabajo-1.png"
            alt="logo nati fessia"
          />
        </div>
        <div className="container-header-txt">
          <p>Arte gráfico / Diseños / Collages</p>
          <h1>
            www<span>.natifessia.</span>com.ar
          </h1>
          analógico digital
        </div>
      </header>
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
            <a
              className="link-instagram"
              href="https://www.instagram.com/natifessia/"
              target="_blank"
              rel="noreferrer"
            >
              CONTACTO
            </a>
            <a
              className="link-experiencia"
              href="https://www.instagram.com/natifessia/"
              target="_blank"
              rel="noreferrer"
            >
              EXPERIENCIA
            </a>
            <a
              className="link-tienda"
              href="https://www.instagram.com/natifessia/"
              target="_blank"
              rel="noreferrer"
            >
              TIENDA
            </a>
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
                  <div className="container-img-trabajo-conjunto">
                    <img
                      className="img-trabajo-conjunto"
                      src={work.URLimagen}
                      alt="imagen de trabajo en conjunto"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <section className="section-trabajos">
          <article>
            <h3>PORTFOLIO / CLIENTES</h3>
            <div className="container-trabajos-portfolio">
              {portfolio.map((work) => (
                <div key={work.sku} className="container-img-portfolio">
                  <img
                    className="img-portfolio"
                    src={work.URLimagen}
                    alt={work.URLimagen}
                  />
                  <h4>{work.cliente}</h4>
                </div>
              ))}
            </div>
          </article>
          <article>
            <h3>EXPERIMENTOS GRÁFICOS</h3>
            <div className="container-trabajos-graficos">
              {experimentos.map((work) => (
                <div key={work.sku} className="container-img-graficos">
                  <img
                    className="img-graficos"
                    src={work.URLimagen}
                    alt={work.URLimagen}
                  />
                  <h4>{work.cliente}</h4>
                </div>
              ))}
            </div>
          </article>
          <article>
            <h3>EXPERIMENTOS FOTOGRÁFICOS</h3>
            <div className="container-trabajos-fotograficos">
              {fotograficos.map((work) => (
                <div key={work.sku} className="container-img-fotograficos">
                  <img
                    className="img-fotograficos"
                    src={work.URLimagen}
                    alt={work.URLimagen}
                  />
                  <h4>{work.cliente}</h4>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
      <footer>
        Sitio desarrollado por{" "}
        <a
          href="https://www.linkedin.com/in/gabriel-alberini/"
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