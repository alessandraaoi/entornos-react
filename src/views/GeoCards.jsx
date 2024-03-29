import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GeoCards() {

    const [cards, setCards] = useState([]);

    const { VITE_CARDS } = import.meta.env;
  
    useEffect(() => {
    const controller = new AbortController(); 
     
    let options = {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }, 
      signal: controller.signal
    }
  
    fetch( VITE_CARDS , options)
      .then (res => res.json())
      .then (data => setCards(data.geoCards))
      .catch (err => console.log(err))
      .finally(() => controller.abort())

    }, [])

  return (
    <>
    <div className='geocards__div'>
    <ul className='geocards__list'>
        {cards.map((card) => {
          return (
            <li key = {card.id} className='geocards__listItem'><Link to = {'/geocards/detalles/' + card.id} className='geocards__link'> {card.pais} </Link></li>
          )
        })}
    </ul>
    </div>

    </>
  )
}

export default GeoCards
