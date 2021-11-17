import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

//Punto de acceso a la App

ReactDOM.render(

    <BrowserRouter>    {/*Enrutador*/}
      <App />           {/*app*/}
    </BrowserRouter>,

  document.getElementById('root')
);

