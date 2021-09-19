import React from 'react'

function userrequest() {
    return (
        <div className="main">
            {/* Header */}
            <div className="header">
                <h1>Dashboard</h1>
                <a href="">Admin</a> &#5171; <a href="">Dashboard</a>
            </div>

            {/* Form */}
            <div className="apply-form">
                <h2>Request to run Candidancy</h2>
                <i><p>You can request to became a
                    candidate for open government
                    office positions below </p></i><br /><br />

                <label>Full Name:</label><br />
                <input type="text" /><br /><br />

                <label>Available Positions:</label><br />
                <select value="">
                    <option value="John">...</option>
                    <option value="John">John Doe</option>
                    <option value="Jane">Jane Doe</option>
                </select><br /><br />

                <label>Political Party you belong in:</label><br />
                <select value="">
                    <option value="John">...</option>
                    <option value="John">John Doe</option>
                    <option value="Jane">Jane Doe</option>
                </select><br /><br />
                <button>Send Request</button>
            </div>
        </div>
    )
}

export default userrequest
