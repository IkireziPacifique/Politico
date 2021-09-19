import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../Dashboard.css'
// import MenuDashboard from './MenuDashboard'
import AdminMaindashboard from './AdminMaindashboard'
import Adminuser from './Adminuser'
import Candidatelist from './Candidatelist'
import Candidaterequest from './Candidaterequest'
import Adminparties from './Adminparties'
import Adminoffice from './Adminoffice'
// import FormLogin from '../form/FormLogin'

function AdminDashboard() {
    return (
        <div className="dashboard">
            <Router>
                <div className="menuDashboardComponent">
                    {/* <MenuDashboard /> */}
                    <div className="menubar">
                        <img className='logo-dashboard' src='./favicon.png' alt='logo' /><br /><br />
                        <ul>
                            <li>
                                <Link to="/">
                                    <i class="fas fa-tachometer-alt"></i>&nbsp; &nbsp;Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/users">
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
                    </div>
                </div>
                <div className="userMainDashboardComponent">
                    <div className="navbar">
                        <i class="far fa-bell"></i>
                            <img className='userphoto' src='./img/user.jpg' alt='user' />
                        <Link to="back">
                            <a href="" className="logout">Logo</a>
                        </Link>
                    </div><br /><br /><br /> <br />
                    <Switch>
                        <Route path="/" exact component={AdminMaindashboard} />
                        <Route path="/users" component={Adminuser} />
                        <Route path="/parties" component={Adminparties} />
                        <Route path="/candidatelist" component={Candidatelist} />
                        <Route path="/candidaterequest" component={Candidaterequest} />
                        <Route path="/position" component={Adminoffice} />
                        {/* <Route path="/back" component={FormLogin} /> */}
                    </Switch>

                </div>

            </Router>

        </div>
    )
}
export default AdminDashboard