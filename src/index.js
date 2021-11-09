import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import firebase from "./firebase-config"
//Punto de acceso a la App

ReactDOM.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>,

  document.getElementById('root')
);

