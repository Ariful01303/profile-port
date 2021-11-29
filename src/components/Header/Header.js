
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



import './Header.css'


const Header = () => {

    return (
        <div>
             <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">MD. ARIFUL ISLAM</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">

    
    <Nav.Link as ={Link} to="/home">About More</Nav.Link>
    <Nav.Link as ={Link} to="/intro">Home</Nav.Link>

   
     
    
      
   </Navbar.Collapse>

     
   
    </Container>
    </Navbar>
        </div>
    );
};

export default Header;