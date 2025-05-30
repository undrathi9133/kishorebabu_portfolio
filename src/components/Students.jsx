import { Badge, Card, Col, ListGroup, ListGroupItem, Row, Stack } from 'react-bootstrap'
import React, { useState } from 'react'
import './students.css'
import { doctoral_students, garduate_students, pg_students } from '../data/students'

function Students() {

  const [activeTab, setActiveTab] = useState('graduate'); // Track the active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Set the active tab
  };

  const StudentCard = ({student}) => {    
    return (
      <Card className='d-flex h-100 bg-light'>
        <Card.Body>
          <Card.Title>{student.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Roll No: {student.rollNo}</Card.Subtitle>
          <ListGroup className="list-group-flush">
            <ListGroupItem className='bg-light'><strong>Mobile Number:</strong> {student.mobileNumber}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>Email:</strong> {student.email}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>Father's Name:</strong> {student.fatherName}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>Father's Mobile Number:</strong> {student.fatherMobileNumber}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>SSC Percentage:</strong> {student.sscPercentage}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>Inter Percentage:</strong> {student.interPercentage}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>B.Tech 1-1 Percentage:</strong> {student.btech1_1Percentage}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>B.Tech I-II Percentage:</strong> {student.btech1_iiPercentage}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>B.Tech II-I Percentage:</strong> {student.btech2_1Percentage}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>B.Tech II-II Percentage:</strong> {student.btech2_iiPercentage}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>B.Tech III-I Percentage:</strong> {student.btech3_1Percentage}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>B.Tech III-II Percentage:</strong> {student.btech3_iiPercentage}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>Backlog:</strong> {student.backlog}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>Goal:</strong> {student.goal}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>Special Interest:</strong> {student.specialInterest}</ListGroupItem>
            <ListGroupItem className='bg-light'><strong>Permanent Address:</strong> {student.permanentAddress}</ListGroupItem>
            {student.rolesApartFromStudies && (
              <ListGroupItem className='bg-light'><strong>Roles Apart from Studies:</strong> {student.rolesApartFromStudies}</ListGroupItem>
            )}
          </ListGroup>
        </Card.Body>
      </Card>
    )
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Students</h2>
      <hr className='mt-0' />

      <div>
        <Stack direction="horizontal" gap={2}>
          <Badge
            pill
            className={activeTab === 'graduate' ? 'active' : ''}
            onClick={() => handleTabClick('graduate')}
            style={{ cursor: 'pointer' }}
          >
            Graduate Students
          </Badge>
          <Badge
            pill
            className={activeTab === 'postgraduate' ? 'active' : ''}
            onClick={() => handleTabClick('postgraduate')}
            style={{ cursor: 'pointer' }}
          >
            Post Graduate Students
          </Badge>
          <Badge
            pill
            className={activeTab === 'doctoral' ? 'active' : ''}
            onClick={() => handleTabClick('doctoral')}
            style={{ cursor: 'pointer' }}
          >
            Doctoral Students
          </Badge>
        </Stack>
      </div>

      <div className='mt-5'>
        <Row>
          {
            (activeTab == 'graduate' && garduate_students.length !== 0) ? garduate_students.map((student, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                <StudentCard student={student} />
              </Col>
            ))
              :
              (activeTab == 'postgraduate' && pg_students.length !== 0) ? pg_students.map((student) => (
                <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                  <StudentCard student={student} />
                </Col>
              ))
                :
                (activeTab == 'doctoral' && doctoral_students.length !== 0) ? doctoral_students.map((student) => (
                  <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                    <StudentCard student={student} />
                  </Col>
                ))
                  :
                  <div>
                    No students found!
                  </div>
          }
        </Row>
      </div>
    </div>
  )
}

export default Students