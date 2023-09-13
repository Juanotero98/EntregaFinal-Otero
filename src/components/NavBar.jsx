import React, {useState} from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  
  const [cartItemCount, setCartItemCount] = useState("3");
  const increaseCartItemCount = () => {
    setCartItemCount((prevCount) => String(parseInt(prevCount, 10) + 1));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light .bg-danger-subtle">
      <a className="navbar-brand" href="#">Goiri Jollas</a>

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
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          <li className="nav-item">
            <button className='btn btn-primary btn-lg btn-custom '>
              <CartWidget cartItemCount={cartItemCount}/>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;








