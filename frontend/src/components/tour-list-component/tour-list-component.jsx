import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'
import SingleTourComponent from '../tour-single-component/tour-single-component'
import './tour-list-component-styles.scss'

class ListTourComponent extends Component {
  render() {
    const {
      tours,
      onSubmitEdit,
      deleteTour
    } = this.props

    return (
      <div>
        <Table responsive striped bordered hover variant='dark'>
          <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Destination</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Price</th>
            <th/>
            <th/>
          </tr>
          </thead>
          <tbody>
          {
            tours.map(tour => {
              return <SingleTourComponent tour={tour}
                                          onSubmitEdit={() => onSubmitEdit(tour._id)}
                                          deleteTour={() => deleteTour(tour._id)}/>
            })
          }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default ListTourComponent
