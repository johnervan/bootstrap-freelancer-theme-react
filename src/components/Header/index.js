import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return <Navbar bg='dark' expand='lg' sticky='top' variant='dark'>
    <div className='container'>
      <Navbar.Brand href='#home'>Start Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <ul className='navbar-nav ml-auto'>
          <Nav.Item as='li'>
            <Nav.Link href='#home'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='#about'>About</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='#services'>Services</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav.Item>
        </ul>
      </Navbar.Collapse>
    </div>
  </Navbar>
}

export default Header
