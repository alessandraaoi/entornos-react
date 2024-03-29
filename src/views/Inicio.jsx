import React from 'react'
import { Link } from 'react-router-dom'

import GeoCards from './GeoCards'

function Inicio() {
  return (
    <>
    <div className='inicio'>
    <h3 className='inicio__h3'>Bienvenido/a a Geo Discover!</h3>

    <button type='button' className='inicio__button'><Link to = {'/geocards'} element = {<GeoCards/>} className='inicio__link'>Descubre las GeoCards!</Link></button>
    </div>
    </>
  )
}

export default Inicio
