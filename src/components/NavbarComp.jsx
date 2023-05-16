import * as React from 'react';
import Tab from '@mui/material/Tab';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';


function NavbarComp() {
  return (
    <Navbar bg="dark" variant ={"dark"}expand="lg">
      <Container>
        <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/seller-profile">Seller Account</Nav.Link>
            <Nav.Link href="/deocrator-profile">Decorator Account</Nav.Link>
            <Nav.Link href="/product">Products</Nav.Link> */}
            <Tab icon={< HomeSharpIcon />} label = "Home" href="/seller-profile" sx={{color:"White", align:"right"}} />
            <Tab icon={< LogoutSharpIcon />} label = "SignOut" href="/seller-profile" sx={{color:" lavender"}} />
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;