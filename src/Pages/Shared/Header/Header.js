import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBiking } from "react-icons/fa";
import './Header.css';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar className="nav-header py-3" collapseOnSelect expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <FaBiking className='header-icon'></FaBiking>
                    <img src="https://i.ibb.co/wQ403FK/logo.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/cycles">Bicycle</Nav.Link>
                        <Nav.Link as={Link} to="/features">Features</Nav.Link>
                        <Nav.Link as={Link} to="/accessories">Accessories</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                    </Nav>
                    <Nav>

                        {
                            user ?
                                <>
                                    <Nav.Link as={Link} to="/manage-cycles">Manage Cycle</Nav.Link>
                                    <Nav.Link as={Link} to="/addCycle">Add Cycle</Nav.Link>
                                    <Nav.Link as={Link} to="/addCycle">My Cycle</Nav.Link>
                                    <Nav.Link as={Link} to="/login" onClick={handleLogOut}>Sing Out</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as={Link} to="/login" className='p-0'>Login/</Nav.Link>
                                    <Nav.Link as={Link} to="/register" className='p-0'> Register</Nav.Link>
                                </>
                        }
                        {/* <>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/sing-up">Sing Up</Nav.Link>
                        </> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;