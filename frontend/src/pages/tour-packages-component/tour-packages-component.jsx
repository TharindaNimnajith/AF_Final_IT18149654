import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'
import axios from 'axios'
import {proxy} from '../../conf'
import NavigationBarComponent from '../../components/navigation-bar-component/navigation-bar-component'
import TourPackageCardDeckComponent from '../../components/tour-package-card-deck-component/tour-package-card-deck-component'
import './tour-packages-component-styles.scss'

class TourPackagesComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      userType: '',
      tours: []
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

  render() {
    const {
      loggedIn,
      userType
    } = this.props

    this.state.loggedIn = loggedIn
    this.state.userType = userType

    return (
      <div className='container'>
        <NavigationBarComponent loggedIn={loggedIn}
                                userType={userType}/>
        <div style={{
          marginTop: '60px',
          marginBottom: '-25px'
        }}
        >
          <TourPackageCardDeckComponent tours={this.state.tours}/>
        </div>
      </div>
    )
  }
}

export default TourPackagesComponent
