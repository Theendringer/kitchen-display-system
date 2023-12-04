import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './Componets/inicio'
import Categorias from "./Componets/Cadastros/categoria"
import Cozinha from "./Componets/cozinha"
import Pedido from "./Componets/pedido"
import Porcoes from "./Componets/porcoes"
import PedidoX from "./Componets/pedidoTeste"
import StatusPedido from "./Componets/statusPedido"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div> 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/categorias' element={<Categorias/>}/>
      <Route path='/cozinha' element={<Cozinha/>}/>
      <Route path='/pedido' element={<Pedido/>}/>
      <Route path='/pedidoTeste' element={<PedidoX/>}/>
      <Route path='/porcoes' element={<Porcoes/>}/>
      <Route path='/bebidas' element={<Cozinha/>}/>
      <Route path='/statusPedido' element={<StatusPedido/>}/>

    </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
