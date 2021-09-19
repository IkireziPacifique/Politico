import React from 'react'

function Adminuser() {
    return (
        <div className="main">
            {/* Header */}
            <div className="header">
                <h1>Dashboard</h1>
                <a href="">Admin</a> &#5171; <a href="">Dashboard</a>
            </div>

            {/* Tables */}
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>

                <tr>
                    <td>01</td>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                </tr>

                <tr>
                    <td>02</td>
                    <td>Jane Doe</td>
                    <td>jane@example.com</td>
                </tr>
            </table>
        </div>
    )
}

export default Adminuser
