import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseName from '../CourseName/CourseName';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../CourseSummary/CourseSummary';
import './courses.css';

const Courses = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <Container className='mt-4'>
                <Row className='rowContainer'>
                    <Col lg='3'>
                        <CourseName></CourseName>
                    </Col>
                    <Col lg='9'>
                        <div className='course-grid mt-3'>
                            {
                                allCourse.map(course => <CourseSummary
                                    key={course._id}
                                    course={course}
                                >
                                </CourseSummary>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;