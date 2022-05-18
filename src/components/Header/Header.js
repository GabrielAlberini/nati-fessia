import { useState } from "react";

const Header = () => {
    const [modalShow, setModalShow] = useState(false);

  return (
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
  );
};

export { Header };
