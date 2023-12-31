import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light .bg-danger-subtle">
     <Link to="/" className="navbar-brand"><h1>Goiri Joyas</h1></Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos/Anillos">Anillos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos/Pulseras">Pulseras</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos/Aros">Aros</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contacto">Contacto</Link>
          </li>
          <li className="nav-item">
            <button className='boton'>
              <CartWidget/>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;








