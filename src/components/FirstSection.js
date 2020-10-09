import React from 'react'
import logo from '../logo.png'

const FirstSection = () => {
  return (
    <div id="firstSection">
      <div className="container">
        <div className="row">
          <div className="col-md-5 m-1">
            <img width="100%" className="m-2" src={logo} alt="hola"/>
          </div>
          <div className="col-1"></div>
          <div className="col-md-5 m-2">
            <p className="text-muted">
            Bienvenido a mi portafolio, visitante. Utilizaré este sitio para llevar un registro de mis avances como desarrollador y aprovechar de mostrar los proyectos en los que he trabajado, adjunto además una imagen del sitio, una descripción de las tecnologías que utilicé y la url donde está hospedado.
            Saludos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSection
