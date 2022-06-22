import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Img from '../../imagenes/flor.png'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./NavBar.css"

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
                        <NavDropdown title="Florales" id="basic-nav-dropdown" >
                            <NavDropdown.Item>
                                <NavLink to="/categoria/FloresOtonio" className="menu">Oto&ntilde;o</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink to="/categoria/FloresInvierno" className="menu" >Invierno</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink to="/categoria/FloresPrimavera" className="menu">Primavera</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink to="/categoria/FloresVerano" className="menu">Verano</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Bulbos" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <NavLink to="/categoria/BulbosPrimavera" className="menu">Primavera</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink to="/categoria/BulbosVerano" className="menu">Verano</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="/categoria/Cesped" className="menu">Cesped</NavLink>
                        <NavLink to="/categoria/Huerta" className="menu">Huerta</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                    <CartWidget />
                </Link>
            </Container>
        </Navbar>
    )
}

export default NavBar