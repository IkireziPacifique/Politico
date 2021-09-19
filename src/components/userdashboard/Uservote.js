import React from 'react'

function Uservote() {
    return (
        <div className="main">
            {/* Header */}
            <div className="header">
                <h1>Dashboard</h1>
                <a href="">Admin</a> &#5171; <a href="">Dashboard</a>
            </div>

            {/* Form */}
            <div className="apply-form">
                <h2>Vote for your Leader</h2>
                <i><p>Select a candidate that you
                    would like to vote for </p></i><br /><br />
                <label>Vote a candidate:</label><br />
                <select value="">
                    <option value="John">...</option>
                    <option value="John">John Doe</option>
                    <option value="Jane">Jane Doe</option>
                </select><br /><br />
                <button>Send Vote</button>
            </div>
        </div>
    )
}

export default Uservote
