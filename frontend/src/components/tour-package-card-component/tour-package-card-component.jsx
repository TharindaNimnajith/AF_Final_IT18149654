import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import './tour-package-card-component-styles.scss'

class TourPackageCardComponent extends Component {
  render() {
    const {
      tour,
      onChangeCount,
      count
    } = this.props

    return (
      <Card>
        <Card.Body>
          <Card.Title align={'center'}
                      style={{
                        marginBottom: '30px'
                      }}
          >
            {tour.tourName}
          </Card.Title>
          <Card.Text align={'center'}>
            {tour.tourDescription}
          </Card.Text>
          <Card.Text align={'center'}>
            Destination: {tour.destination}
          </Card.Text>
          <Card.Text align={'center'}>
            Start Date: {tour.startDate.substring(0, 10)}
          </Card.Text>
          <Card.Text align={'center'}>
            End Date: {tour.endDate.substring(0, 10)}
          </Card.Text>
          <Card.Text align={'center'}>
            Price per Person: {tour.pricePerPerson}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Form>
            <Form.Row>
              <Form.Group as={Col}
                          controlId='formNoOfPersons'>
                <Form.Label>Number of Persons</Form.Label>
                <Form.Control placeholder='Number of Persons'
                              type='text'
                              onChange={onChangeCount}
                              value={count}
                              pattern='[0-9]{1,4}'
                              title='Please enter number of persons.'
                              required/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Button variant='danger'
                        type='submit'
                        style={{
                          marginLeft: '120px'
                        }}
                >
                  Book Now!
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
        </Card.Footer>
      </Card>
    )
  }
}

export default TourPackageCardComponent
