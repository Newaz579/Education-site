import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <Form className='w-50 mx-auto mt-5'>
            <Image 
            style={{ width: "300px", height: "300px" }}
            rounded
            src={user?.photoURL}
            >

            </Image>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" defaultValue={user?.displayName} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" defaultValue={user?.email} placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;