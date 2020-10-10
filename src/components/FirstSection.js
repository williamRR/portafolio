import React from 'react'
import logo from '../logo.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Jumbotron } from 'react-bootstrap'

const FirstSection = () => {

  const classes = {
    section: { marginBottom: "45vh", marginTop: "15vh"},
    jumbotron: { background: "white" },
    image: {width: "50%"}
  }

  return (
    <Container id="firstSection" style={classes.section}>
      <Row>
        <Col xs={12} md={6} className="text-center">
          <Image fluid style={classes.image} src={logo} />
        </Col>
        <Col xs={12} md={6}>
          <Jumbotron style={classes.jumbotron} className="align-center text-center">
              <p className="text-muted">
                Bienvenido a mi portafolio.
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container >
  )
}

export default FirstSection
