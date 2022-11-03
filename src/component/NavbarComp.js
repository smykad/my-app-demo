import React, { Component } from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';


export default class NavbarComp extends Component {
  render() {
    return (
        <Router>
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </div>          
      </div>
      </Router> 
  
      
    )
  }
}
