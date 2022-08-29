import React from 'react'
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar sticky="top" expand="sm" bg="dark" variant="dark">
      <Container>
            <Link to="/" className="navbar-brand">Productos</Link>  
              <Nav className="me-auto">
                <Link to="/new" className="nav-link">Nuevo Producto</Link>
                <Link to="/details" className="nav-link">Detalle y Edición</Link>
              </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar