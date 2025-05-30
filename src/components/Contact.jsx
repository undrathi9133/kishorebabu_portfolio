import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './contact.css'

function Contact() {
  return (
    <div className="">
      <div className='getintouch-bg'></div>
      <h2 className="getintouch text-center">Get In Touch</h2>
      <div className='container contact-cards'>
        <Row>
          {/* Phone Number Card */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <Card>
              <Card.Body className='d-flex flex-column'>
                <Card.Title><FaPhoneAlt /> Phone Number</Card.Title>
                <Card.Text>
                  <strong>(+91) 99663 09503</strong>
                </Card.Text>
                <Button variant="primary" href="tel:+919966309503" className="mt-auto">
                  Call Now
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Email Card */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <Card>
              <Card.Body className='d-flex flex-column'>
                <Card.Title><FaEnvelope /> Email</Card.Title>
                <Card.Text>
                  <strong>dasari2kishore@gmail.com</strong>
                </Card.Text>
                <Button variant="primary" href="mailto:dasari2kishore@gmail.com" className="mt-auto">
                  Send Email
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Address Card */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <Card>
              <Card.Body className='d-flex flex-column'>
                <Card.Title><FaMapMarkerAlt /> Address</Card.Title>
                <Card.Text>
                  <strong>Vaivaka Post, Mudinepalli Mandalam, Krishna District, Andhra Pradesh – 521329, India</strong>
                </Card.Text>
                <Button variant="primary" href="https://www.google.com/maps?q=Vaivaka,+Krishna+District,+Andhra+Pradesh+521329" target="_blank" className="mt-auto">
                  View on Map
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Social Media Card */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <Card>
              <Card.Body className='d-flex flex-column'>
                <Card.Title>Follow Me</Card.Title>
                <div className="d-flex justify-content-around">
                  <Button variant="link" href="https://orcid.org/0000-0001-6920-0674" target="_blank">
                    <FaLinkedin size={25} />
                  </Button>
                  <Button variant="link" href="https://scholar.google.com/citations?hl=en&user=_zVLP9cAAAAJ" target="_blank">
                    <FaTwitter size={25} />
                  </Button>
                  <Button variant="link" href="https://dblp.org/pid/310/9842" target="_blank">
                    <FaFacebook size={25} />
                  </Button>
                  <Button variant="link" href="http://www.scopus.com/authid/detail.url?authorId=57225275803" target="_blank">
                    <FaInstagram size={25} />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Contact
