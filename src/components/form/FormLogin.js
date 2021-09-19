import React from 'react'
import {Link } from 'react-router-dom';

// const FormSignIn = () =>{
const FormLogin = ({ gotosignUp }) => {
    // function systemLogin() {
    //     alert('Sign Queries');
    // }

    return (
        <div className="form-login">
            <div className="form-left">
                <img className='logo-signIn' src='./favicon.png' alt='logo' /><br /><br />
                <h1>VOTE for <br />Your <br />LEADERS</h1><br /><br /> <br />
                <div className="formbtn">
                    <button className="loginbtn" type="submit">
                        <Link to="/">Log In</Link>
                    </button>
                    <button className="signinbtn" type="submit">
                        <Link to="/signup">Sign Up</Link>
                    </button>
                </div>
            </div>
            <form className="form">
                <h2>Welcome Back!</h2><br /><br />
                <div className="form-inputs">
                    <input type="text" name="names" className="form-input" placeholder="Full Name" /><br /><br />
                    <input type="email" name="email" className="form-input" placeholder="Email Address" /><br /><br />
                    <p>Forgot Password?</p><br /><br />
                    <button className="form-input-btn" type="submit" onClick={gotosignUp}>Log In</button>
                </div>
            </form>
        </div>
    )
}
 export default FormLogin