import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Img from '../../imagenes/flor.png'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to={`/`} style={{ textDecoration: 'none' }}>
                    <Navbar.Brand>
                        <img src={Img} width="20" height="20" className="d-inline-block" alt="imagen" />
                        {' '} Semilleria
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="basic-navbar-nav justify-content-md-center">
                    <Nav>
                        <NavDropdown title="Florales" id="basic-nav-dropdown">
                            <NavDropdown.Item href={`/categoria/FloresOtonio`}>Oto&ntilde;o</NavDropdown.Item>
                            <NavDropdown.Item href={`/categoria/FloresInvierno`}>Invierno</NavDropdown.Item>
                            <NavDropdown.Item href={`/categoria/FloresPrimavera`}>Primavera</NavDropdown.Item>
                            <NavDropdown.Item href={`/categoria/FloresVerano`}>Verano</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Bulbos" id="basic-nav-dropdown">
                            <NavDropdown.Item href={`/categoria/BulbosPrimavera`}>Primavera</NavDropdown.Item>
                            <NavDropdown.Item href={`/categoria/BulbosVerano`}>Verano</NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link to='/' className={({isActive})=>isActive? 'clase1' : 'clase2'}>Hort&iacute;colas</Nav.Link> */}
                        <Nav.Link href='/categoria/Cesped'>Cesped</Nav.Link>
                        <Nav.Link href='/categoria/Huerta'>Huerta</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <NavLink>
                </NavLink>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar