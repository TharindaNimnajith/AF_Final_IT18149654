import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBarComponent from '../../components/navigation-bar-component/navigation-bar-component'
import HomeCarouselComponent from '../../components/home-carousel-component/home-carousel-component'
import './home-component-styles.scss'

class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      userType: ''
    }
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
          <HomeCarouselComponent/>
        </div>
      </div>
    )
  }
}

export default HomeComponent
