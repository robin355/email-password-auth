import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.init';
const auth = getAuth(app)
const RegisterReactBootstrap = () => {
    const [passwordError, setpasswordError] = useState('')
    const [success, setsuccess] = useState(false)
    const handleRegister = (event) => {
        event.preventDefault();
        setsuccess(false)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name)
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setpasswordError('please at list two password uppercase')
            return;
        }
        if (password.length < 6) {
            setpasswordError('please at list 6 digit character')
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setpasswordError('please at list one special character')
            return;
        }
        setpasswordError('')


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setsuccess(true)
                updateUserName()
                form.reset();
                verifyEmail();
            })
            .catch(error => {
                console.error('error', error)
                setpasswordError(error.message)
            })
        const verifyEmail = () => {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    alert('please cheack Your Email and varify')

                })
        }
        const updateUserName = (name) => {
            updateProfile(auth.currentUser, {
                displayName: name
            })
                .then(() => {
                    console.log('display name update')
                })
                .catch(error => console.log(error))

        }
    }



    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-primary'>Please Register!!!</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='text' type="text" placeholder="Enter Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                {
                    success && <p className='text-success'>User crete Success</p>
                }
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <h3><small>Already have an account? Please <Link to='/login'>Login</Link> </small></h3>

        </div>
    );
};

export default RegisterReactBootstrap;