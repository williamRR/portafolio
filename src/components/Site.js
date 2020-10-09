import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Nav from 'react-bootstrap/Nav'

const Site = ({ site, reverse }) => {

  const classes = {
    site: {marginTop: "50px",
    marginBottom: "50px",},
    jumbotron: { padding: 0, background: "white" },
    image: {border: "1px solid black", objectFit:"cover"}
  }

  return (
    <Container style={classes.site}>
      <Row className={reverse ? null : "flex-row-reverse"} >
        <Col xs={12} md={6}>
          <Nav.Link href={site.url}>
            <Image style={classes.image} fluid src={site.image} />
          </Nav.Link>
        </Col>
        <Col xs={12} md={6}>
          <Jumbotron style={classes.jumbotron}>
            <h4>{site.title}</h4>
            <p>{site.description}</p>
            {/* <a ></a> */}
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default Site
