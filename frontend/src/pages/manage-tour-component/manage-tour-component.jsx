import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import {proxy} from '../../conf'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AddTourComponent from '../../components/tour-add-component/tour-add-component'
import ListTourComponent from '../../components/tour-list-component/tour-list-component'
import NavigationBarComponent from '../../components/navigation-bar-component/navigation-bar-component'
import './manage-tour-component-styles.scss'

class ManageTourComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tours: [],
      tourName: '',
      tourDescription: '',
      destination: '',
      startDate: '',
      endDate: '',
      pricePerPerson: '',
      editingTourId: '',
      editingTour: null,
      editTour: false,
      loggedIn: true,
      userType: 'Tour Manager'
    }
  }

  componentDidMount() {
    this.getTours()
  }

  getTours = () => {
    axios.get(`${proxy}tour/tour`)
      .then(res => {
        this.setState({
          tours: res.data
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

  onChangeTourName = event => {
    this.setState({
      tourName: event.target.value
    })
  }

  onChangeTourDescription = event => {
    this.setState({
      tourDescription: event.target.value
    })
  }

  onChangeDestination = event => {
    this.setState({
      destination: event.target.value
    })
  }

  onChangeStartDate = event => {
    this.setState({
      startDate: event.target.value
    })
  }

  onChangeEndDate = event => {
    this.setState({
      endDate: event.target.value
    })
  }

  onChangePricePerPerson = event => {
    this.setState({
      pricePerPerson: event.target.value
    })
  }

  onBack = () => {
    this.setState({
      tourName: '',
      tourDescription: '',
      destination: '',
      startDate: '',
      endDate: '',
      pricePerPerson: '',
      editingTourId: '',
      editingTour: null,
      editTour: false
    })
  }

  onSubmitAdd = event => {
    event.preventDefault()
    const tour = {
      tourName: this.state.tourName,
      tourDescription: this.state.tourDescription,
      destination: this.state.destination,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      pricePerPerson: this.state.pricePerPerson
    }
    axios.post(`${proxy}tour/tour`, tour)
      .then(res => {
        if (res.data.exists === true) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A similar tour already exists!',
            footer: res.data.message
          }).then(() => {
          })
        } else {
          this.getTours()
          this.setState({
            tourName: '',
            tourDescription: '',
            destination: '',
            startDate: '',
            endDate: '',
            pricePerPerson: ''
          })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'A new tour added successfully!',
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

  deleteTour = tourId => {
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
        axios.delete(`${proxy}tour/tour/${tourId}`)
          .then(() => {
            this.getTours()
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
          'Tour has been deleted.',
          'success'
        )
      }
    })
  }

  onSubmitEdit = tourId => {
    axios.get(`${proxy}tour/tour/${tourId}`)
      .then(res => {
        this.setState({
          editingTourId: tourId,
          editingTour: res.data
        })
        this.setState({
          editTour: true,
          tourName: this.state.editingTour.tourName,
          tourDescription: this.state.editingTour.tourDescription,
          destination: this.state.editingTour.destination,
          startDate: this.state.editingTour.startDate,
          endDate: this.state.editingTour.endDate,
          pricePerPerson: this.state.editingTour.pricePerPerson
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
    const tour = {
      tourName: this.state.tourName,
      tourDescription: this.state.tourDescription,
      destination: this.state.destination,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      pricePerPerson: this.state.pricePerPerson
    }
    axios.put(`${proxy}tour/tour/${this.state.editingTourId}`, tour)
      .then(res => {
        if (res.data.exists === true) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A similar tour already exists!',
            footer: res.data.message
          }).then(() => {
          })
        } else {
          this.getTours()
          this.setState({
            tourName: '',
            tourDescription: '',
            destination: '',
            startDate: '',
            endDate: '',
            pricePerPerson: '',
            editingTourId: '',
            editingTour: null,
            editTour: false
          })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tour updated successfully!',
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
          Manage Tours
        </h1>
        <Row>
          <Col sm='3'>
            <AddTourComponent onBack={this.onBack}
                              onChangeTourName={this.onChangeTourName}
                              onChangeTourDescription={this.onChangeTourDescription}
                              onChangeDestination={this.onChangeDestination}
                              onChangeStartDate={this.onChangeStartDate}
                              onChangeEndDate={this.onChangeEndDate}
                              onChangePricePerPerson={this.onChangePricePerPerson}
                              onSubmitAdd={this.onSubmitAdd}
                              onSubmitUpdate={this.onSubmitUpdate}
                              editTour={this.state.editTour}
                              tourName={this.state.tourName}
                              tourDescription={this.state.tourDescription}
                              destination={this.state.destination}
                              startDate={this.state.startDate}
                              endDate={this.state.endDate}
                              pricePerPerson={this.state.pricePerPerson}/>
          </Col>
          <Col sm='9'>
            <ListTourComponent tours={this.state.tours}
                               onSubmitEdit={this.onSubmitEdit}
                               deleteTour={this.deleteTour}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ManageTourComponent
