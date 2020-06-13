import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import NavigationBarComponent from '../../components/navigation-bar-component/navigation-bar-component'
import './home-component-styles.scss'

class HomeComponent extends Component {
  constructor(props) {
    super(props);
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
          marginTop: '60px'
        }}
        >
          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={require('../../images/1.jpg')}
                alt='First slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={require('../../images/2.jpg')}
                alt='Second slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={require('../../images/3.jpg')}
                alt='Third slide'
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default HomeComponent
