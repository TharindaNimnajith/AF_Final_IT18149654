import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {proxy} from '../../conf'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import LoginComponent from '../../components/login-component/login-component'
import RegisterComponent from '../../components/register-component/register-component'
import HomeComponent from '../home-component/home-component'
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
        }
      }).catch(error => {
      console.log(error)
    })
  }

  onSubmitRegister = event => {
    event.preventDefault()
    if (this.state.password !== this.state.confirmPassword) {
      alert('passwords do not match')
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
        .then(() => {
          this.setState({
            firstName: '',
            lastName: '',
            phoneNo: '',
            email: '',
            nic: '',
            password: '',
            confirmPassword: ''
          })
        }).catch(error => {
        console.log(error)
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
