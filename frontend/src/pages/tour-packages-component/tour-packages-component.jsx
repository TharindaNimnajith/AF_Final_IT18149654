import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import {proxy} from '../../conf'
import NavigationBarComponent from '../../components/navigation-bar-component/navigation-bar-component'
import TourPackageCardDeckComponent
  from '../../components/tour-package-card-deck-component/tour-package-card-deck-component'
import './tour-packages-component-styles.scss'

class TourPackagesComponent extends Component {
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
      selectedTourId: '',
      selectedTour: null,
      selectTour: false,
      loggedIn: true,
      userType: 'Customer',
      count: 1
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

  onSubmitHandle = tourId => {
    axios.get(`${proxy}tour/tour/${tourId}`)
      .then(res => {
        this.setState({
          selectedTourId: tourId,
          selectedTour: res.data
        })
        this.setState({
          selectTour: true,
          tourName: this.state.selectedTour.tourName,
          tourDescription: this.state.selectedTour.tourDescription,
          destination: this.state.selectedTour.destination,
          startDate: this.state.selectedTour.startDate,
          endDate: this.state.selectedTour.endDate,
          pricePerPerson: this.state.selectedTour.pricePerPerson
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

  onChangeCount = event => {
    this.setState({
      count: event.target.value
    })
  }

  render() {
    return (
      <div className='container'>
        <NavigationBarComponent loggedIn={this.state.loggedIn}
                                userType={this.state.userType}/>
        <div style={{
          marginTop: '60px',
          marginBottom: '-25px'
        }}
        >
          <TourPackageCardDeckComponent tours={this.state.tours}
                                        onSubmitHandle={this.onSubmitHandle}
                                        onChangeCount={this.onChangeCount}
                                        count={this.state.count}/>
        </div>
      </div>
    )
  }
}

export default TourPackagesComponent
