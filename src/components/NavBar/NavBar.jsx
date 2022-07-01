import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
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
                <NavLink to="/categoria/Flores" className="menu">Flores</NavLink>
                <NavLink to="/categoria/Bulbos" className="menu">Bulbos</NavLink>
                <NavLink to="/categoria/Huerta" className="menu">Huerta</NavLink>
                <NavLink to="/categoria/Cesped" className="menu">Cesped</NavLink>
                <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                    <CartWidget />
                </Link>
            </Container>
        </Navbar>
    )
}

export default NavBar