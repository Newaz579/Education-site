import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');

    const { signInWithGoogle, signInWithGitHub, userSignIn, setLoading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/courses";

    //google SignIn Method
    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    //GitHub SignIn Method
    const handleGitHubSignIn = () => {
        console.log('git click');
        signInWithGitHub(gitHubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    //logIn With Email & Password
    const handleUserSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. please verify your email.');
                }
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Form onSubmit={handleUserSignIn} className='w-50 mx-auto mt-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button className='mb-4' variant="primary" type="submit">
                Submit
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <p><small><Link to='/register'>Create a New Account?</Link></small></p>
            <br />
            <Button onClick={handleGoogleSignIn} className='me-2'>
                <FaGoogle className='mx-2'></FaGoogle>Continue With Google
            </Button>

            <span>or</span>
            <Button onClick={handleGitHubSignIn} className='mx-2'>
                <FaGithub className='mx-2'></FaGithub>Continue With GitHub
            </Button>
        </Form>
    );
};

export default Login;