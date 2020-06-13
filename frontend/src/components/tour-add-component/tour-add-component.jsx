import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './tour-add-component-styles.scss'

class AddTourComponent extends Component {
  render() {
    const {
      onChangeTourName,
      onChangeTourDescription,
      onChangeDestination,
      onChangeStartDate,
      onChangeEndDate,
      onChangePricePerPerson,
      onSubmitAdd,
      onSubmitUpdate,
      editTour,
      tourName,
      tourDescription,
      destination,
      startDate,
      endDate,
      pricePerPerson
    } = this.props

    return (
      <div>
        <Form
          onSubmit={editTour ? onSubmitUpdate : onSubmitAdd}
          style={{
            border: 'solid 1px',
            padding: '20px',
            borderRadius: '10px'
          }}
        >
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridTourName'>
              <Form.Label>Tour Name</Form.Label>
              <Form.Control placeholder='Enter Tour Name'
                            type='text'
                            onChange={onChangeTourName}
                            value={tourName}
                            title='Please enter a tour name.'
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridTourDescription'>
              <Form.Label>Tour Description</Form.Label>
              <Form.Control placeholder='Enter Tour Description'
                            type='text' onChange={onChangeTourDescription}
                            value={tourDescription}
                            title='Please enter a tour description.'
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridDestination'>
              <Form.Label>Destination</Form.Label>
              <Form.Control placeholder='Enter Destination'
                            type='text' onChange={onChangeDestination}
                            value={destination}
                            title='Please enter a destination.'
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridStartDate'>
              <Form.Label>Start Date</Form.Label>
              <Form.Control placeholder='Enter Start Date'
                            type='date'
                            onChange={onChangeStartDate}
                            value={startDate}
                            title='Please enter a start date.'
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridEndDate'>
              <Form.Label>End Date</Form.Label>
              <Form.Control placeholder='Enter End Date'
                            type='date'
                            onChange={onChangeEndDate}
                            value={endDate}
                            title='Please enter an end date.'
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridPricePerPerson'>
              <Form.Label>Price Per Person (LKR)</Form.Label>
              <Form.Control placeholder='Enter Price per Person'
                            type='string'
                            onChange={onChangePricePerPerson}
                            value={pricePerPerson}
                            pattern='[0-9]{1,16}'
                            title='Please enter valid price per person.'
                            required/>
            </Form.Group>
          </Form.Row>
          <Button variant='primary'
                  type='submit'
                  className={editTour ? 'btn btn-block btn-success mt-3' : 'btn btn-block btn-primary mt-3'}>
            {editTour ? 'Edit' : 'Add'}
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddTourComponent
