import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import {FaEdit, FaTrashAlt} from 'react-icons/fa'
import './tour-single-component-styles.sass'

class SingleTourComponent extends Component {
  render() {
    const {
      tour,
      onSubmitEdit,
      deleteTour
    } = this.props

    return (
      <tr key={tour._id}>
        <td>{tour.firstName}</td>
        <td>{tour.lastName}</td>
        <td>{tour.phoneNo}</td>
        <td>{tour.email}</td>
        <td>{tour.nic}</td>
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
