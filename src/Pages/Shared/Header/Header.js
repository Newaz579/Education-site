import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';
import Image from 'react-bootstrap/Image'
import LogoImage from '../../../Assets/Logo/LogoImage.jpg';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Button } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import { BiToggleRight } from "react-icons/bi";
import { toast } from 'react-hot-toast';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);

    const [theme, setTheme] = useState('lightTheme');
    
    const toggleTheme = () => {
        if(theme === "darkTheme"){
            setTheme("lightTheme");
        }
        else{
            setTheme("darkTheme")
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {

            })
            .catch((error) => {
                console.error(error);
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Image
                    className='headerImage'
                    roundedCircle
                    src={LogoImage}
                >

                </Image>
                <Navbar.Brand href="#home"><Link className='headerTitle' to='/'>Programming World</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">
                            <Link className='headerCommonClass' to='/courses'>Courses</Link>
                        </Nav.Link>
                        <Nav.Link href="#features">
                            <Link className='headerCommonClass' to='/faq'>FAQ</Link>
                        </Nav.Link>
                        <Nav.Link href="#features">
                            <Link className='headerCommonClass' to='/blog'>Blog</Link>
                        </Nav.Link>
                        <Button onClick={() => toggleTheme()}><BiToggleRight></BiToggleRight></Button>
                    </Nav>
                    <Nav >
                        {
                            user?.uid ?
                                <>
                                    <p>
                                        <Link to='/profile'>{user.displayName}</Link>
                                    </p>
                                    <Link to='/profile'>
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{user?.displayName}</Tooltip>}>
                                            {
                                                user?.photoURL ?

                                                    <span>
                                                        <Image
                                                            className='headerImage'
                                                            roundedCircle
                                                            src={user?.photoURL}
                                                        >
                                                        </Image>
                                                    </span>
                                                    :
                                                    <FaUser></FaUser>
                                            }
                                        </OverlayTrigger>
                                    </Link>
                                    <Button onClick={handleSignOut}>Log Out</Button>
                                </>
                                :
                                <>
                                    <Link className='loginAndRegisterNav' to='/login'>Login</Link>
                                    <Link className='loginAndRegisterNav' to='/register'>Register</Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;



