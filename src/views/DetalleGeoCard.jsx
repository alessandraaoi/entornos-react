import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import GeoCards from './GeoCards';

// ------------- FETCH CON DATOS DE OBJETO
 
function DetalleGeoCard() {

  const { VITE_DETALLES } = import.meta.env;

    let {id} = useParams();
    
    const [detalles, setDetalles] = useState([]);
    // por default objeto vacío porque vamos a coger datos de objetos

    useEffect(() => {
        const controller = new AbortController(); 
         
        let options = {
          method: 'GET',
          headers:{
              'Content-Type': 'application/json'
          }, 
          signal: controller.signal
        }
      
        fetch( VITE_DETALLES + id, options)
        .then(res => res.json())
        .then (data => setDetalles(data))
        .catch (err => console.log(err))
        .finally(() => controller.abort())
        
        }, [])
    

  return (
    <>
    <div className='div__detalle__card'>
    <div className='div__card'>
    <p className='div__card__x'><Link to = {'/geocards'} element = {<GeoCards/>} className='div__card__link'>&times;</Link></p>
    <h2 className='div__card__h2'>{detalles.pais}</h2>
    
    <p className='div__card__texto'>Capital: {detalles.capital}</p>
    <p className='div__card__texto'>Forma de gobierno: {detalles.gobierno}</p>
    <p className='div__card__texto'>Moneda: {detalles.moneda}</p>
    <br/>
    <p className='div__card__textoDescripcion'>{detalles.descripcion}</p>
    </div>
    </div>
    </>
  )
}

export default DetalleGeoCard