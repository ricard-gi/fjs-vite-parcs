import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import dadesParcs from './parcs.json';
import App from './App'
import Inici from "./Inici";
import Parc from './Parc';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<Inici />} />
          <Route path="/parc/:nom" element={<Parc dades={dadesParcs}/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
