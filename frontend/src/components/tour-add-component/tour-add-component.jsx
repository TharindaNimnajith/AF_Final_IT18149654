import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './tour-add-component-styles.scss'

class AddTourComponent extends Component {
  render() {
    const {
      onBack,
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
                            value={startDate.substring(0, 10)}
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
                            value={endDate.substring(0, 10)}
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
          {
            editTour ? (
              <Form.Row>
                <Form.Group>
                  <Button variant='primary'
                          type='button'
                          className={'btn btn-block btn-primary mt-3'}
                          style={{
                            marginLeft: '10px',
                            marginRight: '20px'
                          }}
                          onClick={onBack}
                  >
                    Back
                  </Button>
                </Form.Group>
                <Form.Group>
                  <Button variant='primary'
                          type='submit'
                          className={'btn btn-block btn-primary mt-3'}
                          style={{
                            marginLeft: '20px',
                            marginRight: '20px'
                          }}
                  >
                    Edit
                  </Button>
                </Form.Group>
              </Form.Row>
            ) : (
              <Button variant='primary'
                      type='submit'
                      className={'btn btn-block btn-primary mt-3'}
              >
                Add
              </Button>
            )
          }
        </Form>
      </div>
    )
  }
}

export default AddTourComponent
