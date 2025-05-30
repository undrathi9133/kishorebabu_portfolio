import React from 'react'

function Talks() {
    return (
        <div className='container'>
            <h2 className='page-header'>Talks</h2>
            <hr className='mt-0' />
            <div>
                <ul>
                    <li>"Introduction to Deep Learning"
                          Institution: G. Narayanamma Institute of Technology and Science, Hyderabad
                          Audience: B.Tech final-year students
                          Date: April 2023</li>
                    <li>"Machine Learning Concepts and Real-Time Applications"
                         Institution: RBVRR Women’s College, Hyderabad
                         Event: AICTE Sponsored FDP
                         Date: February 2023
                    </li>
                    <li>"Apache Pig and Big Data Analytics"
                         Institution: HITAM, Hyderabad
                         Audience: Data Science and CSE students
                         Date: November 2022 
                    </li>
                    <li>"Artificial Intelligence: Trends and Opportunities"
                         Institution: Aurora's Degree & PG College, Hyderabad
                         Event: Tech Symposium
                         Date: October 2022</li>
                </ul>
            </div>
        </div>
    )
}

export default Talks