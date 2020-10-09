import React from 'react'
import './navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Navigation = () => {

  return (
    <Container>     
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="#home">William Rehel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={{color: "black"}} href="#secondSection">Proyectos</Nav.Link>
            <Nav.Link style={{color: "black"}} href="#footer">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>

  )
}

export default Navigation
