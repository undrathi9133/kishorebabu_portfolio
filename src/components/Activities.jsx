import React from 'react'
import { activities } from '../data/activities'
import { Row, Col, Card, Button, Accordion } from 'react-bootstrap';

function Activities() {
  return (
    <div className='container'>
      <h2 className='page-header'>Activities</h2>
      <hr className='mt-0' />

      <div>
        {activities.FDPs.map((yearData, index) => (
          <Accordion key={index} className='mb-2'>
            <Accordion.Item eventKey={index.toString()}>
              <Accordion.Header>
                <h5>{yearData.year} - {yearData.sem} sem</h5>
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  {yearData.events.map((event, eventIndex) => (
                    <Col lg={4} md={6} sm={12} className="mb-4" key={eventIndex}>
                      <Card className="shadow-sm d-flex h-100">
                        <Card.Body className='d-flex flex-column'>
                          <Card.Title className="text-theme">{event.FDP}</Card.Title>
                          <Card.Text>
                            <strong>Number of Days:</strong> {event.no_of_days} <br />
                            <strong>Organized by:</strong> {event.organized_by}
                          </Card.Text>
                          {/* <Button variant="primary" className="w-100 mt-auto">More Details</Button> */}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default Activities