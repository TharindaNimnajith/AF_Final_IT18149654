import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import {FaEdit, FaTrashAlt} from 'react-icons/fa'
import './tour-single-component-styles.scss'

class SingleTourComponent extends Component {
  render() {
    const {
      tour,
      onSubmitEdit,
      deleteTour
    } = this.props

    return (
      <tr key={tour._id}>
        <td>{tour.tourName}</td>
        <td>{tour.tourDescription}</td>
        <td>{tour.destination}</td>
        <td>{tour.startDate.substring(0, 10)}</td>
        <td>{tour.endDate.substring(0, 10)}</td>
        <td>{tour.pricePerPerson}</td>
        <td>
          <Button
            variant={'primary'}
            onClick={onSubmitEdit}
          >
            <FaEdit
              size={20}
              style={{
                marginBottom: '4px',
                marginLeft: '2px'
              }}
            />
          </Button>
        </td>
        <td>
          <Button
            variant={'danger'}
            onClick={deleteTour}
          >
            <FaTrashAlt
              size={20}
              style={{
                marginBottom: '4px',
                marginLeft: '2px'
              }}
            />
          </Button>
        </td>
      </tr>
    )
  }
}

export default SingleTourComponent
