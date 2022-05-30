import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Img from '../../imagenes/flor.png'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Img} width="20" height="20" className="d-inline-block" alt="imagen" />{' '} Semilleria
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="basic-navbar-nav justify-content-md-center">
                    <Nav>
                        <NavDropdown title="Florales" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/1.1">Anuales y Bianuales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.2">Perennes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/1.3">Siembra de Oto&ntilde;o</NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.4">Siembra de Primavera</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Bulbos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/2.1">Oto&ntilde;o/Invierno</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2">Primavera/Verano</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Hort&iacute;colas</Nav.Link>
                        <Nav.Link href="#link">C&eacute;sped</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar