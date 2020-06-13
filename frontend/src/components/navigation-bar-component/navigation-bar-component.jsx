import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './navigation-bar-component-styles.scss'

class NavigationBarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      userType: ''
    }
  }

  render() {
    const {
      loggedIn,
      userType
    } = this.props

    this.state.loggedIn = loggedIn
    this.state.userType = userType

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
          <div>
            <Link to='/'
                  style={{
                    textDecoration: 'none'
                  }}
            >
              <Navbar.Brand href='#home'>Home</Navbar.Brand>
            </Link>
          </div>
          <div
            style={{
              position: 'fixed',
              right: '150px'
            }}
          >
            <Nav className='mr-auto'>
              {
                loggedIn && userType === 'Administrator' ? (
                    <Link to='/managers'
                          style={{
                            textDecoration: 'none'
                          }}
                    >
                      <Nav.Link href='#managers'>Manage Tour Managers</Nav.Link>
                    </Link>
                  ) :
                  null
              }
              {
                loggedIn && userType === 'Tour Manager' ? (
                    <Link to='/tours'
                          style={{
                            textDecoration: 'none'
                          }}
                    >
                      <Nav.Link href='#tours'>Manage Tours</Nav.Link>
                    </Link>
                  ) :
                  null
              }
            </Nav>
          </div>
          <div
            style={{
              position: 'fixed',
              right: '30px'
            }}
          >
            {
              loggedIn ? (
                  <Link to='/'
                        style={{
                          textDecoration: 'none'
                        }}
                  >
                    <Button variant='outline-info'>Logout</Button>
                  </Link>
                ) :
                <Link to='/login'
                      style={{
                        textDecoration: 'none'
                      }}
                >
                  <Button variant='outline-info'>Login</Button>
                </Link>
            }
          </div>
        </Nav>
      </Navbar>
    )
  }
}

export default NavigationBarComponent
