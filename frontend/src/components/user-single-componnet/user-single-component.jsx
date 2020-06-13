import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import {FaEdit, FaTrashAlt} from 'react-icons/fa'

class SingleUserComponent extends Component {
  render() {
    const {
      user,
      onSubmitEdit,
      deleteUser
    } = this.props

    return (
      <tr key={user._id}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.phoneNo}</td>
        <td>{user.email}</td>
        <td>{user.nic}</td>
        <td>
          <Button
            variant={'primary'}
            onClick={onSubmitEdit}
          >
            <FaEdit
              size={20}
              style={{
                marginBottom: '4px',
                marginLeft: '2px'
              }}
            />
          </Button>
        </td>
        <td>
          <Button
            variant={'danger'}
            onClick={deleteUser}
          >
            <FaTrashAlt
              size={20}
              style={{
                marginBottom: '4px',
                marginLeft: '2px'
              }}
            />
          </Button>
        </td>
      </tr>
    )
  }
}

export default SingleUserComponent
