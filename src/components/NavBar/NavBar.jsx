import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Img from '../../images/lavanda.png'
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
                        <img src={Img} width="25" height="25" className="d-inline-block" alt="imagen" />
                        {' '} <span className="gradient-text">SEMILLERIA</span>
                    </Navbar.Brand>
                </Link>

                <Nav className="mr-auto">
                    <NavLink to="/category/Flores" className="menu">Flores</NavLink>
                    <NavLink to="/category/Bulbos" className="menu">Bulbos</NavLink>
                    <NavLink to="/category/Huerta" className="menu">Huerta</NavLink>
                    <NavLink to="/category/Cesped" className="menu">Cesped</NavLink>
                </Nav>

                <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                    <CartWidget />
                </Link>
            </Container>
        </Navbar>
    )
}

export default NavBar