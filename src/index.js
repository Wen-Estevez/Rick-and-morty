import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {FirebaseAppProvider} from "reactfire";
import firebaseconf from "./firebase-config"

//Punto de acceso a la App

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseconf}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

