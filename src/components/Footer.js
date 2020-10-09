import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { faFacebook, faGithub, faTwitter, faGooglePlus, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  const classes={
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
      <Row>
        <Col className="text-center">
          <FontAwesomeIcon style={classes.icon} size="3x" icon={faFacebook} />
          <FontAwesomeIcon style={classes.icon} size="3x" icon={faGooglePlus} />
          <FontAwesomeIcon style={classes.icon} size="3x" icon={faTwitter} />
          <FontAwesomeIcon style={classes.icon} size="3x" icon={faGithub} />
          <FontAwesomeIcon style={classes.icon} size="3x" icon={faWhatsapp} />
        </Col>
      </Row>
    </Container>


  )
}

export default Footer