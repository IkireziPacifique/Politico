import React from 'react'

function UsermainDashboard() {
    return (
        <div className="dashboardmain">
        {/* Header */}
        <div className="header">
            <h1>Dashboard</h1>
            <a href="">Admin</a> <a href="">Dashboard</a>
        </div>

        {/* overview */}
        <div className="cards">
            <div className="row1">
                <div className="card card1">
                    <i class="fas fa-3x fa-landmark"></i>
                    <div>
                        <h1>30</h1>
                        <p>Political Parties</p>
                    </div>
                </div>
                <div className="card card2">
                <i class="fas fa-3x fa-landmark"></i>
                    <div>
                        <h1>30</h1>
                        <p>Political Parties</p>
                    </div>
                </div>
            </div><br />
            <div className="card card3">
            <i class="fas fa-3x fa-landmark"></i>
                    <div>
                        <h1>30</h1>
                        <p>Political Parties</p>
                    </div>
            </div>
        </div>
        {/* overview table*/}
    </div>
    )
}

export default UsermainDashboard
