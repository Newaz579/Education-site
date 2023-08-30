import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, emailVerification, updateUserProfile } = useContext(AuthContext);
    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUpdateUserProfile(name);
                handleEmailVerification();
                toast.success('Verify your email address.');
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleEmailVerification = () => {
        emailVerification()
            .then(() => {

            })
            .catch((error) => {
                console.error(error);
            })
    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name
        };
        updateUserProfile(profile)
            .then(() => {

            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <Form onSubmit={handleCreateUser} className='w-50 mx-auto mt-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Button className='mb-4' variant="primary" type="submit">
                Submit
            </Button>
            <p><small><Link to='/login'>Already Have an Account?</Link></small></p>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;