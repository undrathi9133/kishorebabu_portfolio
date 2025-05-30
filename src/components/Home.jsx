import React from 'react'
import './home.css'
import profileImage from '../assets/profile.jpg';
import { Button, Stack, Col, Row } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa'

function Home() {
    return (
        <div className="homepage-container">
            <Row className='justify-content-center'>
                <Col lg={2} sm={12} className="mb-4 profile-image-container offset-lg-2">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </Col>
                <Col lg={6} sm={12} className="mb-4 profile-info">
                    <div>
                        <h2 className="name">Dr. KISHOREBABU DASARI</h2>
                        <p className="title p-0 m-0">Associate Professor</p>
                        <p className='p-0 m-0'><a className='btn btn-link p-0' href='https://kmit.in/' target='_blank'><b className='fontsize-14'>Keshav Memorial Institute of Technology</b></a></p>
                        <p className='p-0 m-0'>Naranyanguda, Telangana, India</p>
                        <ul className='list-style-none p-0'>
                            <li className='fontsize-14'>
                                Specialized in Computer Science & Engineering with over 15 years of teaching and research experience.
                            </li>
                        </ul>
                    </div>
                    <div className='stack-buttons-container'>
                        <Stack direction='horizontal' gap={2}>
                            <Button size='sm' type='button' href='https://scholar.google.com/citations?hl=en&user=_zVLP9cAAAAJ' target='_blank'>
                                <FaGoogle /> Google Scholar
                            </Button>
                            <Button size='sm' type='button' href='http://www.scopus.com/authid/detail.url?authorId=57225275803' target='_blank'>
                                Scopus
                            </Button>
                        </Stack>
                    </div>
                </Col>
            </Row>

            <div>
                <h2 className='page-header'>Educational Qualification</h2>
                <hr className='mt-0' />

                <ul>
                    <li><strong>Ph.D. in Computer Science and Engineering</strong> from Acharya Nagarjuna University in 2023</li>
                    <li><strong>M.Tech (Software Engineering) </strong> completed in Avanthi Institute of Engineering and Technology, Vishakapatnam, JNTU in 2009</li>
                    <li><strong>B.Tech (CSE)</strong> completed in Gudlavalleru Engg. College, Gudlavalleru, JNTU in 2004 </li>
                    <li><strong>UGC-NET qualified in December, 2018</strong>  </li>
                    <li><strong>APSET qualified in 2013</strong>  </li>
                    <li><strong>GATE qualified in 2013 and 2005</strong>  </li>
                </ul>
            </div>
        </div>
    )
}

export default Home