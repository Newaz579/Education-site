import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCategoryDisplay from '../CourseCategoryDisplay/CourseCategoryDisplay';
import './CourseCategory.css'
import { Col, Container, Row } from 'react-bootstrap';
import CourseName from '../CourseName/CourseName';

const CourseCategory = () => {
    const categoryCourse = useLoaderData();
    return (
        <Container className='mt-3'>
            <Row className='rowContainer'>
                <Col lg='3'>
                    <CourseName></CourseName>
                </Col>
                <Col className='courseGrid' lg='9'>
                    
                    {
                        categoryCourse.map(category => <CourseCategoryDisplay
                            key={category._id}
                            category={category}
                        >
                        </CourseCategoryDisplay>)
                    }
                </Col>
            </Row>

        </Container>
    );
};

export default CourseCategory;