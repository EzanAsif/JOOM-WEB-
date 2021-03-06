import { React, useState } from "react";
import "./styles.css";
import {Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const SiteHeader = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="header">
      <a href="/">
        <svg viewBox="0 0 145 27" class="logo___3HoHd">
          <path
            d="M18.272 18.632c0 4.2-3.43 7.618-7.662 7.618V8.202c0-4.2 3.43-7.619 7.662-7.619v18.049z"
            fill="#3D3F56"
          ></path>
          <ellipse
            fill="#F64343"
            cx="4.421"
            cy="22.458"
            rx="3.831"
            ry="3.792"
          ></ellipse>
          <path
            d="M47.037 2.928a2.078 2.078 0 01.648-1.528c.414-.428.993-.66 1.591-.642a2.06 2.06 0 011.533.642c.42.4.654.952.648 1.528V18.97a7.649 7.649 0 01-2.357 5.612 7.81 7.81 0 01-5.67 2.333 2.062 2.062 0 01-1.533-.642 2.02 2.02 0 01-.649-1.516 2.078 2.078 0 01.649-1.529 2.062 2.062 0 011.532-.641 3.555 3.555 0 002.582-1.062 3.48 3.48 0 001.026-2.555V2.928zm21.997 23.975a12.763 12.763 0 01-9.336-3.85 12.5 12.5 0 01-3.89-9.24 12.558 12.558 0 013.89-9.263A12.787 12.787 0 0169.034.723a12.858 12.858 0 019.36 3.827 12.593 12.593 0 013.867 9.263 12.523 12.523 0 01-3.867 9.24 12.822 12.822 0 01-9.36 3.85zm0-21.875a8.58 8.58 0 00-6.26 2.567 8.438 8.438 0 00-2.617 6.218 8.369 8.369 0 002.617 6.195 8.876 8.876 0 006.272 2.588 8.876 8.876 0 006.271-2.588 8.403 8.403 0 002.594-6.195 8.46 8.46 0 00-2.582-6.218 8.64 8.64 0 00-6.295-2.567zM99.32 26.903a12.763 12.763 0 01-9.336-3.85 12.5 12.5 0 01-3.89-9.24 12.558 12.558 0 013.89-9.263c5.164-5.106 13.532-5.106 18.696 0a12.593 12.593 0 013.867 9.263 12.523 12.523 0 01-3.867 9.24 12.822 12.822 0 01-9.36 3.85zm0-21.875a8.58 8.58 0 00-6.307 2.567 8.438 8.438 0 00-2.617 6.218 8.369 8.369 0 002.617 6.195 8.876 8.876 0 006.272 2.588 8.876 8.876 0 006.271-2.588 8.403 8.403 0 002.594-6.195 8.46 8.46 0 00-2.594-6.218 8.64 8.64 0 00-6.236-2.567zm43.205-4.27c.472.121.887.397 1.18.782.294.368.452.825.447 1.295v21.922a2.054 2.054 0 01-.625 1.516 2.192 2.192 0 01-3.089 0 2.042 2.042 0 01-.624-1.516V10.57l-6.873 11.235-.07.128v.07l-.095.094-.224.14-.07.07-.107.093-.13.07-.129.07h-.106c-.278.12-.58.177-.884.163h-.07a2.142 2.142 0 01-.484-.093h-.271l-.142-.07-.13-.093-.471-.14-.083-.07-.07-.07-.095-.094a.173.173 0 010-.07l-.094-.128-6.943-11.305v14.187a2.02 2.02 0 01-.649 1.516c-.394.4-.933.627-1.497.63a2.193 2.193 0 01-2.17-2.146V2.847a2.04 2.04 0 01.449-1.295 2.147 2.147 0 011.179-.782 2.25 2.25 0 011.379.07c.447.176.824.491 1.073.898l9.065 14.817 9.066-14.817a2.09 2.09 0 01.966-.898l.684-.257.707.175z"
            fill="#3D3F56"
          ></path>
        </svg>
      </a>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
         English
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">??????????????</Dropdown.Item>
          <Dropdown.Item href="#/action-2">??e??tina</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Dansk</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Deutsch</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Espa??ol</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Eesti</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Fran??ais</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Italiano</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Nederlands</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Norsk bokm??l</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Polski</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Portugu??s</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Portugu??s (Brasil)</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Rom??n??</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Svenska</Dropdown.Item>
          <Dropdown.Item href="#/action-3">?????????</Dropdown.Item>
          <Dropdown.Item href="#/action-3">T??rk??e???</Dropdown.Item>
          <Dropdown.Item href="#/action-3">????????????????</Dropdown.Item>
          <Dropdown.Item href="#/action-3">????????????????????</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SiteHeader;
