import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { providerLoing, providerEmailLonig } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const provider = new GoogleAuthProvider();

    const googleLogin = () => {
        providerLoing(provider)
            .then(res => {
                const user = res.user;
                setError('');
                // navigate(from, { replace: true });
                console.log(user)
                navigate('/')
            })
            .catch(error => console.error(error))
    }


    const handleLoing = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        providerEmailLonig(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
                // navigate('/');
            })
            .catch(e => setError(e.message));

    }

    return (
        <div className='mx-auto border border-2 rounded mt-5 w-50'>
            <h2 className='text-center mt-5'>Please Login</h2>
            <Form onSubmit={handleLoing} className='px-3 mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-muted mb-1">
                    <p>New user to <Link to="/register">register</Link></p>
                </Form.Text>
                <Form.Text className="text-danger mb-1 text-center">
                    <p>{error}</p>
                </Form.Text>
                <Button className='d-block w-50 mx-auto d-block fs-5 ' variant="outline-success" type="submit">
                    Loing
                </Button>
            </Form>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className='w-50 bg-secondary'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary'></div>
            </div>
            <div className='mb-3'>
                <button onClick={googleLogin} className='btn btn-outline-success w-25 mx-auto d-block p-2'>
                    <FaGoogle></FaGoogle>
                    <span className='px-1'>Google Sing In</span>
                </button>
            </div>
        </div>
    );
};

export default Login;