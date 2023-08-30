import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const detailsCourse = useLoaderData();
    const { title, image_url, details, _id } = detailsCourse;

    return (
        <Card className='mx-auto w-50 mt-5 mb-5'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details
                    }
                </Card.Text>
            </Card.Body>
            <h3>CourseId: {_id}</h3>
        </Card>
    );
};

export default CourseDetails;


