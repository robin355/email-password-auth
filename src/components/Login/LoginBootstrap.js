import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../Firebase/Firebase.init';
const auth = getAuth(app)
const LoginBootstrap = () => {
    const [success, setsuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('')
    const handleLogin = (event) => {
        event.preventDefault();
        setsuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setsuccess(true)

            })
            .catch(error => {
                console.log('error', error)
            })


    }
    const handleOnBlur = event => {
        const email = event.target.value;
        setUserEmail(email)
    }
    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('please Enter Your Email Addess.')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('passward Reset!! Please Cheak Your Email')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login!!!</h3>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input type="email" onBlur={handleOnBlur} name="email" className="form-control" id="formGroupExampleInput" placeholder="Please you input Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Please you input password" />
                    <br />
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
            {success && <p className='text-success'>Succcessfully Login</p>}
            <h5><small>New To this Website? Please <Link to='/register'>Register</Link> </small></h5>
            <p><small>Forget Password? <button type="button" onClick={handleForgetPassword} className='btn btn-link'>Reset Password</button></small></p>
        </div>
    );
};

export default LoginBootstrap;