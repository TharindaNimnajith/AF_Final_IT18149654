import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {proxy} from '../../conf'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AddTourComponent from '../../components/tour-add-component/tour-add-component'
import ListTourComponent from '../../components/tour-list-component/tour-list-component'
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
      editTour: false
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
      .then(() => {
        this.getTours()
        this.setState({
          tourName: '',
          tourDescription: '',
          destination: '',
          startDate: '',
          endDate: '',
          pricePerPerson: ''
        })
      }).catch(error => {
      console.log(error)
    })
  }

  deleteTour = tourId => {
    axios.delete(`${proxy}tour/tour/${tourId}`)
      .then(() => {
        this.getTours()
      }).catch(error => {
      console.log(error)
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
      .then(() => {
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
      }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className='container'>
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
            <AddTourComponent onChangeTourName={this.onChangeTourName}
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
