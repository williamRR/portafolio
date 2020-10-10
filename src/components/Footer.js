import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { faFacebook, faGithub, faTwitter, faGooglePlus, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Nav from 'react-bootstrap/Nav'

const Footer = () => {

  const classes = {
    icon: {
      margin: "20px",
    },
    footer: {
      marginTop: "40vh",
      background: "white"
    }
  }
  return (
    <Container id="footer" fluid style={classes.footer} className="mb-0 justify-content-center">
      <Row>
        <Col className="text-center">
          <p className="display-5">
            William Alberto Rehel Rifo
          </p>
        </Col>
      </Row>
      <Row className="text-center display-block" style={{ justifyContent: "center" }}>
        {/* <Col className="text-center"> */}
        <Nav.Link style={{ color: "black" }} href="https://www.facebook.com/">
          <FontAwesomeIcon style={classes.icon} size="3x" icon={faFacebook} />
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="https://www.google.com/">
          <FontAwesomeIcon style={classes.icon} size="3x" icon={faGooglePlus} />
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="https://twitter.com/">
          <FontAwesomeIcon style={classes.icon} size="3x" icon={faTwitter} />
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="https://github.com/williamRR">
          <FontAwesomeIcon style={classes.icon} size="3x" icon={faGithub} />
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="https://wa.me/<56930023354>">
          <FontAwesomeIcon style={classes.icon} size="3x" icon={faWhatsapp} />
        </Nav.Link>
        {/* </Col> */}
      </Row>
    </Container>
  )
}

export default Footer