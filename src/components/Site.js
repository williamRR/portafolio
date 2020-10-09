import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import { Jumbotron } from 'react-bootstrap'

const Site = ({ site, reverse }) => {

  const siteStyle={
    // height: "75vh"    
  }

  return (
    <Container>
      <Row className={reverse ? null : "flex-row-reverse"} style={siteStyle}>
        <Col xs={12} md={6}>
          <Image fluid src={site.image} />
        </Col>
        <Col xs={12} md={6}>
                  <Jumbotron style={{background: "white"}}>
          <h1>{site.title}</h1>
          <p>{site.description}</p>
          {/* <a href={site.url}></a> */}
          </Jumbotron>
        </Col>        
        </Row>
    </Container>
  )
}

export default Site
