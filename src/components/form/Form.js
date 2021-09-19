import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./Form.css"
import FormSignUp from './FormSignUp'
import FormLogin from './FormLogin'
import AdminDashboard from '../adminDashboard/AdminDashboard'
import Userdashboard from '../userdashboard/Userdashboard'

const Form = () => {
    const [loginForm, setLoginForm] = useState(true)
    function gotosignUp() {
        setLoginForm(false)
    }

    const [signupForm, setSignupForm] = useState(true)
    function gotologIn() {
        setSignupForm(false)
    }

    return (
        <div className='form-container'>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        {loginForm ? (<FormLogin gotosignUp={gotosignUp} />) : (<AdminDashboard />)}
                    </Route>
                    <Route path="/signup">
                        {signupForm ? (<FormSignUp gotologIn={gotologIn} />) : (<Userdashboard />)}
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

export default Form