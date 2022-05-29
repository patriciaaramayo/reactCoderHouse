import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Semilleria</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Florales" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/1.1">Anuales y Bianuales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.2">Perennes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/1.3">Siembra de OtoÃ±o</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.4">Siembra de Primavera</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Bulbos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/2.1">OtoÃ±o/Invierno</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2">Primavera/Verano</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Horticolas</Nav.Link>
                        <Nav.Link href="#link">Cesped</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar