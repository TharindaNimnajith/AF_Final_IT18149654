import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './tour-manager-add-component-styles.scss'

class AddTourManagerComponent extends Component {
  render() {
    const {
      onBack,
      onChangeFirstName,
      onChangeLastName,
      onChangePhoneNo,
      onChangeEmail,
      onChangeNIC,
      onSubmitAdd,
      onSubmitUpdate,
      editUser,
      firstName,
      lastName,
      phoneNo,
      email,
      nic
    } = this.props

    return (
      <div>
        <Form
          onSubmit={editUser ? onSubmitUpdate : onSubmitAdd}
          style={{
            border: 'solid 1px',
            padding: '20px',
            borderRadius: '10px'
          }}
        >
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder='Enter First Name'
                            type='text'
                            onChange={onChangeFirstName}
                            value={firstName}
                            pattern='[A-Za-z]{2,32}'
                            title='Please enter a valid first name.'
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder='Enter Last Name'
                            type='text'
                            onChange={onChangeLastName}
                            value={lastName}
                            pattern='[A-Za-z]{2,32}'
                            title='Please enter a valid last name.'
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridPhoneNo'>
              <Form.Label>Phone No</Form.Label>
              <Form.Control placeholder='Enter Phone Number'
                            type='text'
                            onChange={onChangePhoneNo}
                            value={phoneNo}
                            pattern='0[0-9]{9}'
                            title='Please enter a valid phone number.'
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder='Enter Email'
                            type='email'
                            onChange={onChangeEmail}
                            value={email}
                            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                            title='Please enter a valid email.'
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridNIC'>
              <Form.Label>NIC</Form.Label>
              <Form.Control placeholder='Enter NIC'
                            type='text'
                            onChange={onChangeNIC}
                            value={nic}
                            pattern='[0-9]{9}V'
                            title='Please enter a valid NIC.'
                            required/>
            </Form.Group>
          </Form.Row>
          {
            editUser ? (
              <Form.Row>
                <Form.Group>
                  <Button variant='primary'
                          type='button'
                          className={'btn btn-block btn-primary mt-3'}
                          style={{
                            marginLeft: '10px',
                            marginRight: '20px'
                          }}
                          onClick={onBack}
                  >
                    Back
                  </Button>
                </Form.Group>
                <Form.Group>
                  <Button variant='primary'
                          type='submit'
                          className={'btn btn-block btn-primary mt-3'}
                          style={{
                            marginLeft: '20px',
                            marginRight: '20px'
                          }}
                  >
                    Edit
                  </Button>
                </Form.Group>
              </Form.Row>
            ) : (
              <Button variant='primary'
                      type='submit'
                      className={'btn btn-block btn-primary mt-3'}
              >
                Add
              </Button>
            )
          }
        </Form>
      </div>
    )
  }
}

export default AddTourManagerComponent
