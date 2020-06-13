import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import {proxy} from '../../conf'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AddTourManagerComponent from '../../components/tour-manager-add-component/tour-manager-add-component'
import ListTourManagerComponent from '../../components/tour-manager-list-component/tour-manager-list-component'
import NavigationBarComponent from '../../components/navigation-bar-component/navigation-bar-component'
import './manage-tour-manager-component-styles.scss'

class ManageTourManagerComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      firstName: '',
      lastName: '',
      phoneNo: '',
      email: '',
      nic: '',
      editingUserId: '',
      editingUser: null,
      editUser: false,
      loggedIn: true,
      userType: 'Administrator'
    }
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    axios.get(`${proxy}manager/manager`)
      .then(res => {
        this.setState({
          users: res.data
        })
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

  onSubmitAdd = event => {
    event.preventDefault()
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      nic: this.state.nic
    }
    axios.post(`${proxy}manager/manager`, user)
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
          this.getUsers()
          this.setState({
            firstName: '',
            lastName: '',
            phoneNo: '',
            email: '',
            nic: ''
          })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'A new tour manager added successfully!',
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

  deleteUser = userId => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#3085d6',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        axios.delete(`${proxy}manager/manager/${userId}`)
          .then(() => {
            this.getUsers()
          }).catch(error => {
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'An unexpected error occurred. Please try again later.'
          }).then(() => {
          })
        })
        Swal.fire(
          'Deleted!',
          'Tour manager has been deleted.',
          'success'
        )
      }
    })
  }

  onSubmitEdit = userId => {
    axios.get(`${proxy}manager/manager/${userId}`)
      .then(res => {
        this.setState({
          editingUserId: userId,
          editingUser: res.data
        })
        this.setState({
          editUser: true,
          firstName: this.state.editingUser.firstName,
          lastName: this.state.editingUser.lastName,
          phoneNo: this.state.editingUser.phoneNo,
          email: this.state.editingUser.email,
          nic: this.state.editingUser.nic
        })
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

  onSubmitUpdate = event => {
    event.preventDefault()
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      nic: this.state.nic
    }
    axios.put(`${proxy}manager/manager/${this.state.editingUserId}`, user)
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
          this.getUsers()
          this.setState({
            firstName: '',
            lastName: '',
            phoneNo: '',
            email: '',
            nic: '',
            editingUserId: '',
            editingUser: null,
            editUser: false
          })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tour manager updated successfully!',
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

  render() {
    return (
      <div className='container'>
        <NavigationBarComponent loggedIn={this.state.loggedIn}
                                userType={this.state.userType}/>
        <h1 style={{
          textAlign: 'center',
          marginTop: '80px',
          marginBottom: '50px',
          textTransform: 'uppercase',
          letterSpacing: '4px',
          color: 'darkblue'
        }}>
          Manage Tour Managers
        </h1>
        <Row>
          <Col sm='3'>
            <AddTourManagerComponent onChangeFirstName={this.onChangeFirstName}
                                     onChangeLastName={this.onChangeLastName}
                                     onChangePhoneNo={this.onChangePhoneNo}
                                     onChangeEmail={this.onChangeEmail}
                                     onChangeNIC={this.onChangeNIC}
                                     onSubmitAdd={this.onSubmitAdd}
                                     onSubmitUpdate={this.onSubmitUpdate}
                                     editUser={this.state.editUser}
                                     firstName={this.state.firstName}
                                     lastName={this.state.lastName}
                                     phoneNo={this.state.phoneNo}
                                     email={this.state.email}
                                     nic={this.state.nic}/>
          </Col>
          <Col sm='9'>
            <ListTourManagerComponent users={this.state.users}
                                      onSubmitEdit={this.onSubmitEdit}
                                      deleteUser={this.deleteUser}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ManageTourManagerComponent
