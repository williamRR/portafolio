import React from 'react';
import './navigation.css'

const Navigation = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand" href="/">
        William Rehel
        </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-5 ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#secondSection">Proyectos</a>
          </li>
          <li className="nav-item">
            <a href="#footer" className="nav-link" >
              Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>

  )
}

export default Navigation
