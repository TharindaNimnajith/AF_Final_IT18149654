import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'
import SingleUserComponent from '../tour-single-component/tour-single-component'
import './tour-list-component-styles.sass'

class ListUserComponent extends Component {
  render() {
    const {
      users,
      onSubmitEdit,
      deleteUser
    } = this.props

    return (
      <div>
        <Table responsive striped bordered hover variant='dark'>
          <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>NIC</th>
            <th/>
            <th/>
          </tr>
          </thead>
          <tbody>
          {
            users.map(user => {
              return <SingleUserComponent user={user}
                                          onSubmitEdit={() => onSubmitEdit(user._id)}
                                          deleteUser={() => deleteUser(user._id)}/>
            })
          }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default ListUserComponent
