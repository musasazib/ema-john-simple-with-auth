import React from 'react';
import './Login.css';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const { location } = useLocation();
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-John? <Link to="/register">Create Account</Link></p>
                <div>---------- or ----------</div>
                <br />
                <button className="btn-regular"
                    onClick={signInUsingGoogle}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;