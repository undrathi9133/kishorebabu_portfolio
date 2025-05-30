import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { certificates } from '../data/certificates'

const CertificateCard = ({ subject, organized_by, year, semester, score }) => {
    return (
        <Col lg={4} md={6} sm={12} className="mb-4">
            <Card className='d-flex h-100 bg-light'>
                <Card.Body>
                    <Card.Title className='text-theme'>{subject}</Card.Title>
                    <Card.Text>
                        <strong>Organized by:</strong> {organized_by}
                    </Card.Text>
                    <Card.Text>
                        <strong>Year:</strong> {year}
                    </Card.Text>
                    <Card.Text>
                        <strong>Semester:</strong> {semester}
                    </Card.Text>
                    {score && (
                        <Card.Text>
                            <strong>Score:</strong> {score}
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
};

const Certificates = () => {
    return (
        <Container>
            <h2 className='page-header'>Coursera Certificates</h2>
            <hr className='mt-0' />
            <Row>
                {certificates.coursera.map((cert, index) => (
                    <CertificateCard
                        key={index}
                        subject={cert.subject}
                        organized_by={cert.organized_by}
                        year={cert.year}
                        semester={cert.semester}
                    />
                ))}
            </Row>

            <h2 className="page-header">NPTEL Certificates</h2>
            <hr className='mt-0' />
            <Row>
                {certificates.nptel.map((cert, index) => (
                    <CertificateCard
                        key={index}
                        subject={cert.subject}
                        organized_by={cert.organized_by}
                        year={cert.year}
                        semester={cert.semester}
                        score={cert.score}
                    />
                ))}
            </Row>
        </Container>
    );
};

export default Certificates;
