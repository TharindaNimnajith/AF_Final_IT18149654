import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './tour-add-component-styles.sass'

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
                            required/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}
                        controlId='formGridPricePerPerson'>
              <Form.Label>Price Per Person</Form.Label>
              <Form.Control placeholder='Enter Price per Person'
                            type='number'
                            onChange={onChangePricePerPerson}
                            value={pricePerPerson}
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
