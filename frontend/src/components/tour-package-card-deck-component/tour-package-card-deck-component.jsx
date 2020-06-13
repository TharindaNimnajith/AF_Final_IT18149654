import React, {Component} from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import TourPackageCardComponent from '../tour-package-card-component/tour-package-card-component'
import './tour-package-card-deck-component-styles.scss'

class TourPackageCardDeckComponent extends Component {
  render() {
    const {
      tours
    } = this.props

    return (
      <div>
        <h1 style={{
          textAlign: 'center',
          marginTop: '80px',
          marginBottom: '50px',
          textTransform: 'uppercase',
          letterSpacing: '4px',
          color: 'darkblue'
        }}>
          Tour Packages
        </h1>
        <div style={{
          marginBottom: '80px'
        }}>
          <CardDeck>
            {
              tours.map(tour => {
                return <TourPackageCardComponent tour={tour}/>
              })
            }
          </CardDeck>
        </div>
      </div>
    )
  }
}

export default TourPackageCardDeckComponent
