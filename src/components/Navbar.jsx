import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function Navbarhome() {
  return (
    <nav className="nav-bar">
        <Navbar.Brand href="#home">
            &nbsp;&nbsp;<img
              src="https://media.istockphoto.com/id/1320330053/photo/dotted-grid-paper-background-texture-seamless-repeat-pattern.jpg?b=1&s=170667a&w=0&k=20&c=7J_y56bPBPGszpBcafqeuO-F6JAoRxY6XUfABSskbJE="
              width="35"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> </Navbar.Brand> 
          <Navbar.Brand> <span style={{'font-size':35,'color':'white'}}>&nbsp;Medical Darpan</span>
          </Navbar.Brand>
          <Nav className='mx-auto'>
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#features">Products</Nav.Link>
          <Nav.Link href="#features">Distributors</Nav.Link>
          <Nav.Link href="#features">Manufactures</Nav.Link>
          <Nav.Link href="#features">About us</Nav.Link>
          <Nav.Link href="#features">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login &nbsp;&nbsp;&nbsp;<i className='fa fa-user'></i>&nbsp;&nbsp;&nbsp;</Nav.Link>
            
          </Nav>
        {/* <div className="login">
            <h3>Login</h3>
            <i className='fa fa-user icon'></i>
        </div> */}
    </nav>
  )
}

export default  Navbarhome