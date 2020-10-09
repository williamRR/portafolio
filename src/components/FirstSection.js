import React from 'react'
import logo from '../logo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Jumbotron } from 'react-bootstrap'

const FirstSection = () => {
  return (
    <Container id="firstSection">
      <Row>
        <Col xs={12} md={6}>
          <Image fluid src={logo} />
        </Col>
        <Col xs={12} md={6}>
          <Jumbotron style={{background: "white"}}>
            <p className="text-muted">
              Bienvenido a mi portafolio, visitante. Utilizaré este sitio para llevar un registro de mis avances como desarrollador y aprovechar de mostrar los proyectos en los que he trabajado, adjunto además una imagen del sitio, una descripción de las tecnologías que utilicé y la url donde está hospedado.
              Saludos.
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container >
  )
}

export default FirstSection
