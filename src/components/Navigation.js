import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand mx-auto" to='/'>William Rehel</Link>
        {/* <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/form'>Agregar</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  )
}

export default Navigation
