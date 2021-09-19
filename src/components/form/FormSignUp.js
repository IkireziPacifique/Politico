import React from 'react'
import {Link } from 'react-router-dom';

// function systemSignUp({gotologIn}) {
//     //setLoginForm(false);
//     alert('SIgn Up');
// }
const FormSignUp = ({ gotologIn }) => {
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
                <h2>Welcome to Politico!</h2><br /><br />
                <div className="form-inputs">
                    <input type="text" name="names" className="form-input" placeholder="Full Name" /><br /><br />
                    <input type="email" name="email" className="form-input" placeholder="Email Address" /><br /><br />
                    <input type="text" name="idnumber" className="form-input" placeholder="id Number" /><br /><br />
                    <input type="password" name="pswd" className="form-input" placeholder="Enter Password" /><br /><br />
                    <input type="password" name="pswd2" className="form-input" placeholder="Re-enter Password" /><br /><br /><br />
                    <button className="form-input-btn" type="submit" onClick={gotologIn}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default FormSignUp