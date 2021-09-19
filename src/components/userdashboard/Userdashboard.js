import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../Dashboard.css'
import UsermainDashboard from './UsermainDashboard'
// import Usermenu from './Usermenu'
import Uservote from './Uservote'
import Userrequest from './Userrequest'
// import Userprofile from './Userprofile'

function Userdashboard() {
    return (
        <div className="dashboard">
            <Router>
                <div className="menuDashboardComponent">
                    <div className="menubar">
                        <img className='logo-dashboard' src='./favicon.png' alt='logo' /><br /><br />
                        <ul>
                            <li>
                                <Link to="/">
                                    <i class="fas fa-tachometer-alt"></i>&nbsp; &nbsp;Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/vote">
                                    <i class="fas fa-vote-yea"></i>&nbsp; &nbsp;Vote
                                </Link>
                            </li>
                            <li>
                                <Link to="/request">
                                    <i class="fas fa-paper-plane"></i>&nbsp; &nbsp;Send Candidacy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="userMainDashboardComponent">
                    {/* Navigation */}
                    <div className="navbar">
                        <i class="far fa-bell"></i>
                        <img className='userphoto' src='./img/user.jpg' alt='user' />
                        <a href="" className="logout">Logo</a>
                    </div><br /><br /><br /> <br />
                    <Switch>
                        <Route path="/" exact component={UsermainDashboard} />
                        <Route path="/vote" component={Uservote} />
                        <Route path="/request" component={Userrequest} />
                        {/* <Route path="/profile" component={Userprofile} /> */}
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Userdashboard
