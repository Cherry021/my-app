import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const NavbarPanel = () => {
    const cartProducts = useSelector(state => state.cart);
  return (
    <Navbar expand="lg" bg="light">
      <Container fluid>
        <Navbar.Brand href="#">DMart</Navbar.Brand>
        <Nav>
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
        </Nav>

        <Navbar.Toggle />

        <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
                <Nav.Link to="/cart" as={Link} >cart {cartProducts? cartProducts.length:0}</Nav.Link>
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
