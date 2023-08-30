import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {
    const { _id, title, image_url, details} = course;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length>250 ?
                        <p>
                            {details.slice(0, 250) + '...'}
                            <br></br>
                            <Link to={`/courses/${_id}`}>Get Premium to continue reading</Link>
                        </p>
                        :
                        <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CourseSummary;