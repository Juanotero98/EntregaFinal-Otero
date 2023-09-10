import React from 'react'


const NavBar = () => {
  return (
    <nav className='navbar'>
      <a href='#' className='logo'><h1>Goiri Jollas</h1></a>
      <ul className='menu'>
        <li className='menu-link'>Inicio</li>
        <li className='menu-link'>Productos</li>
        <li className='menu-link'>Contacto</li>
      </ul>
    </nav>
  )
}

export default NavBar
