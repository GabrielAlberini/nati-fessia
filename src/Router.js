import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Detail } from "./views/Detail/Detail";
import { NotFound } from './views/NotFound/NotFound'
import App from './views/Login/DashboardLogin'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detalle" element={<Detail />}></Route>
          <Route path="/admin" element={<App />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { Router };
