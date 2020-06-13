import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import './home-carousel-component-styles.scss'

class HomeCarouselComponent extends Component {
  render() {
    return (
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
    )
  }
}

export default HomeCarouselComponent
