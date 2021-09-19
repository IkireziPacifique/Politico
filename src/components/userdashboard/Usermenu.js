import React from 'react'
// import Link from "react-router-dom"

function usermenu() {
    return (
        <div className="menubar">
            <img className='logo-dashboard' src='./favicon.png' alt='logo' /><br /><br />
            <ul>
                <li>
                    {/* <Link to="/Uservote">hjklkj</Link>   */}
                </li>
                <li><a href=""><i class="fas fa-tachometer-alt"></i>&nbsp; &nbsp;Dashboard</a></li>
                <li><a href=""><i class="fas fa-vote-yea"></i>&nbsp; &nbsp;Vote</a></li>
            </ul>
        </div>
    )
}

export default usermenu
