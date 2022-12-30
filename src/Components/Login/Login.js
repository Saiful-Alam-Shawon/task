import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../firebase/Context';

const Login = () => {

    const { login, google, user } = useContext(AuthProvider);
    const [error, setError] = useState('');
    // console.log(user.email);
    const navigation = useNavigate();


    const handleLoginButton = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        login(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user.email);
                // form.reset();
                navigation('/')
                form.reset();
            }).catch((error) => {
                // setError(error)
                console.error(setError(error.message))

            });
        // form.reset();
    }






    return (
        <div className='mx-auto w-50' >

            <h1 className='m-2 mx-auto w-50'>Login Please !!!</h1>

            <Form onSubmit={handleLoginButton}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                {error && <p className='text-red-600'>{error}</p>}
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <div>
                    <span>Are You New</span>    <a href="register">Register</a>
                </div>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>






        </div>
    );
};

export default Login;