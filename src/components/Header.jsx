import React from "react";
import { Link } from "react-router-dom";

import Inicio from "../views/Inicio";
import GeoCards from "../views/GeoCards";

function Header() {


  return (
    <header className="header">
      <h1 className="header__title">GEO DISCOVER</h1>
      <ul className="header__list">
        <li className="header__listItem"><Link to = {'/'} element = {<Inicio/>} className="header__link">INICIO</Link></li>
        <li className="header__listItem"><Link to = {'/geocards'} element = {<GeoCards/>} className="header__link">GEOCARDS</Link></li>
        
      </ul>
    </header>
  );
}

export default Header;
