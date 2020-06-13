import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './navigation-bar-component-styles.scss'
import {Link} from 'react-router-dom'

class NavigationBarComponent extends Component {
  render() {
    return (
      <Navbar bg='dark'
              variant='dark'
              fixed='top'
              expand='md'
              style={{
                width: '100%'
              }}
              collapseOnSelect
      >
        <Nav>
          <Link to='/'>
            <Navbar.Brand href='#home'>Home</Navbar.Brand>
          </Link>
          <Nav className='mr-auto'>
            <Link to='/managers'>
              <Nav.Link href='#managers'>Manage Tour Managers</Nav.Link>
            </Link>
            <Link to='/tours'>
              <Nav.Link href='#tours'>Manage Tours</Nav.Link>
            </Link>
          </Nav>
          <Link to='/login'>
            <Button variant='outline-info'>Login</Button>
          </Link>
          <Link to='/'>
            <Button variant='outline-info'>Logout</Button>
          </Link>
        </Nav>
      </Navbar>
    )
  }
}

export default NavigationBarComponent
