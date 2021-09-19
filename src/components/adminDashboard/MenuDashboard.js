import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminMaindashboard from './AdminMaindashboard'
import Adminuser from './Adminuser'
import Candidatelist from './Candidatelist'
import Candidaterequest from './Candidaterequest'
import Adminparties from './Adminparties'
import Adminoffice from './Adminoffice'

function menuDashboard() {
    return (
        <div className="menubar">
            <Router>
                <img className='logo-dashboard' src='./favicon.png' alt='logo' /><br /><br />
                <ul>
                    <li>
                        <Link to="/">
                            <i class="fas fa-tachometer-alt"></i>&nbsp; &nbsp;Dashboard 
                        </Link>
                    </li>
                    <li>
                        <Link to ="/users">
                            <i class="fas fa-user-friends"></i>&nbsp; &nbsp;Users
                        </Link>
                    </li>
                    <li><i class="fas fa-landmark"></i>&nbsp; &nbsp;Political Parties</li>
                    <li className="sub">
                        <Link to="/parties">
                            List
                        </Link>
                    </li>
                    <li><i class="fas fa-user"></i>&nbsp; &nbsp;Candidates</li>
                    <li className="sub">
                        <Link to="/candidatelist">
                            List
                        </Link>
                    </li>
                    <li className="sub">
                        <Link to="/candidaterequest">
                            Request
                        </Link>
                    </li>
                    <li>
                        <Link to="/position">
                            <i class="fas fa-search"></i>&nbsp; &nbsp;Gvt Office
                        </Link>
                    </li>
                </ul>
            </Router>
        </div>
    )
}

export default menuDashboard
