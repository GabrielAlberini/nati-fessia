import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Detail } from "./views/Detail/Detail";
import { NotFound } from './views/NotFound/NotFound'
import DashboardLogin from './views/Login/DashboardLogin'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detalle/:id" element={<Detail />}></Route>
          <Route path="/admin" element={<DashboardLogin />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { Router };
