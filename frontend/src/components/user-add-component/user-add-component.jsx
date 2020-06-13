import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class AddUserComponent extends Component {
  render() {
    const {
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
            <Form.Group as={Col} controlId='formGridFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder='Enter First Name' type='text' onChange={onChangeFirstName} value={firstName}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder='Enter Last Name' type='text' onChange={onChangeLastName} value={lastName}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridPhoneNo'>
              <Form.Label>Phone No</Form.Label>
              <Form.Control placeholder='Enter Phone Number' type='text' onChange={onChangePhoneNo} value={phoneNo}
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder='Enter Email' type='email' onChange={onChangeEmail} value={email} required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridNIC'>
              <Form.Label>NIC</Form.Label>
              <Form.Control placeholder='Enter NIC' type='text' onChange={onChangeNIC} value={nic} required/>
            </Form.Group>
          </Form.Row>
          <Button variant='primary' type='submit'
                  className={editUser ? 'btn btn-block btn-success mt-3' : 'btn btn-block btn-primary mt-3'}>
            {editUser ? 'Edit' : 'Add'}
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddUserComponent
