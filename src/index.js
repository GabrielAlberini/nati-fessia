import './styles.css';
import React from "react";
import ReactDOM from "react-dom";
import { Router } from './Router'

//Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <body className='main-content'>
      <Router />
    </body>
  </React.StrictMode>,
  document.getElementById("root")
);
