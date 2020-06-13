import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import {proxy} from '../../conf'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import LoginComponent from '../../components/login-component/login-component'
import RegisterComponent from '../../components/register-component/register-component'
import HomeComponent from '../home-component/home-component'
import NavigationBarComponent from '../../components/navigation-bar-component/navigation-bar-component'
import './login-register-component-styles.scss'

class LoginRegisterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phoneNo: '',
      email: '',
      nic: '',
      password: '',
      confirmPassword: '',
      loginEmail: '',
      loginPassword: '',
      loggedIn: false,
      userType: ''
    }
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  onChangePhoneNo = event => {
    this.setState({
      phoneNo: event.target.value
    })
  }

  onChangeEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  onChangeNIC = event => {
    this.setState({
      nic: event.target.value
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  onChangeConfirmPassword = event => {
    this.setState({
      confirmPassword: event.target.value
    })
  }

  onChangeLoginEmail = event => {
    this.setState({
      loginEmail: event.target.value
    })
  }

  onChangeLoginPassword = event => {
    this.setState({
      loginPassword: event.target.value
    })
  }

  onSubmitLogin = event => {
    event.preventDefault()
    const user = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }
    axios.post(`${proxy}login/login`, user)
      .then(res => {
        this.setState({
          loginEmail: '',
          loginPassword: ''
        })
        if (res.data.login === 1) {
          this.setState({
            loggedIn: true,
            userType: res.data.type
          })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logged in Successfully!',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
          })
        } else if (res.data.login === 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.data.message
          }).then(() => {
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'An unexpected error occurred. Please try again later.'
          }).then(() => {
          })
        }
      }).catch(error => {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An unexpected error occurred. Please try again later.'
      }).then(() => {
      })
    })
  }

  onSubmitRegister = event => {
    event.preventDefault()
    if (this.state.password !== this.state.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords must match!',
        footer: 'Please enter the same password for both Password & Confirm Password fields.'
      }).then(() => {
      })
    } else {
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNo: this.state.phoneNo,
        email: this.state.email,
        nic: this.state.nic,
        password: this.state.password
      }
      axios.post(`${proxy}login/register`, user)
        .then(res => {
          if (res.data.exists === true) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'A similar user already exists!',
              footer: res.data.message
            }).then(() => {
            })
          } else {
            this.setState({
              firstName: '',
              lastName: '',
              phoneNo: '',
              email: '',
              nic: '',
              password: '',
              confirmPassword: ''
            })
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Registration Successful!',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
            })
          }
        }).catch(error => {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An unexpected error occurred. Please try again later.'
        }).then(() => {
        })
      })
    }
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <HomeComponent loggedIn={this.state.loggedIn}
                       userType={this.state.userType}/>
      )
    }

    return (
      <div className='container'>
        <NavigationBarComponent loggedIn={this.state.loggedIn}
                                userType={this.state.userType}/>
        <div style={{marginTop: '70px'}}>
          <Row>
            <Col sm='6'>
              <h3 align={'center'}
                  style={{
                    marginBottom: '10px'
                  }}
              >
                I already have an account!
              </h3>
              <h4 align={'center'}
                  style={{
                    marginBottom: '10px'
                  }}
              >
                Please login using email and password.
              </h4>
              <LoginComponent onChangeLoginEmail={this.onChangeLoginEmail}
                              onChangeLoginPassword={this.onChangeLoginPassword}
                              onSubmitLogin={this.onSubmitLogin}
                              loginEmail={this.state.loginEmail}
                              loginPassword={this.state.loginPassword}/>
            </Col>
            <Col sm='6'>
              <h3 align={'center'}
                  style={{
                    marginBottom: '10px'
                  }}
              >
                I don't have an account!
              </h3>
              <h4 align={'center'}
                  style={{
                    marginBottom: '10px'
                  }}
              >
                Please register providing necessary details.
              </h4>
              <RegisterComponent onChangeFirstName={this.onChangeFirstName}
                                 onChangeLastName={this.onChangeLastName}
                                 onChangePhoneNo={this.onChangePhoneNo}
                                 onChangeEmail={this.onChangeEmail}
                                 onChangePassword={this.onChangePassword}
                                 onChangeConfirmPassword={this.onChangeConfirmPassword}
                                 onChangeNIC={this.onChangeNIC}
                                 onSubmitRegister={this.onSubmitRegister}
                                 firstName={this.state.firstName}
                                 lastName={this.state.lastName}
                                 phoneNo={this.state.phoneNo}
                                 email={this.state.email}
                                 nic={this.state.nic}
                                 password={this.state.password}
                                 confirmPassword={this.state.confirmPassword}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default LoginRegisterComponent
