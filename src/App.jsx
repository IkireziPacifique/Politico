import React from "react";
import './App.css'
import Form from "./components/form/Form";
// import Userdashboard from "./components/userdashboard/Userdashboard"
// import AdminDashboard from "./components/adminDashboard/AdminDashboard"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App(){
    return (
            <Router>
                <Switch>
                    <Route path="/">
                        <Form /> 
                    </Route>
{/* 
                    <Route path="/">
                        <Userdashboard />
                    </Route> */}

                    {/* <Route path="/">
                        <AdminDashboard />
                    </Route> */}
                </Switch>
            </Router>
    )
}

export default App