import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Inicio from './views/Inicio';
import GeoCards from './views/GeoCards';
import DetalleGeoCards from './views/DetalleGeoCard';
import './css/style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
  
  <Header/> 

  <Routes>
    <Route path='/' element = {<Inicio/>}/>
    <Route path='/geocards' element = {<GeoCards/>}/>
    <Route path='/geocards/detalles/:id' element = {<DetalleGeoCards/>}/>
  </Routes>
</Router>
)
