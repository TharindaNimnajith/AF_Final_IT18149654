import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './login-component-styles.scss'

class LoginComponent extends Component {
  render() {
    const {
      onChangeLoginEmail,
      onChangeLoginPassword,
      onSubmitLogin,
      loginEmail,
      loginPassword
    } = this.props

    return (
      <div>
        <Form
          onSubmit={onSubmitLogin}
          style={{
            border: 'solid 1px',
            padding: '20px',
            borderRadius: '10px'
          }}
        >
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridLoginEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder='Enter Email'
                            type='text'
                            onChange={onChangeLoginEmail}
                            value={loginEmail}
                            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                            title='Please enter a valid email.'
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridLoginPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder='Enter Password'
                            type='password'
                            onChange={onChangeLoginPassword}
                            value={loginPassword}
                            minlength={5}
                            title='Please enter a valid password.'
                            required/>
            </Form.Group>
          </Form.Row>
          <Button variant='primary'
                  type='submit'
                  className={'btn btn-block btn-primary mt-3'}>
            Login
          </Button>
        </Form>
      </div>
    )
  }
}

export default LoginComponent
