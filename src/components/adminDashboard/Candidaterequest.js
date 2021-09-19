import React from 'react'

function Candidaterequest() {
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
                    <th>Political Party</th>
                    <th>govt-office</th>
                    <th>Approve</th>
                    <th>Deny</th>
                </tr>

                <tr>
                    <td>01</td>
                    <td>John Doe</td>
                    <td>FPR</td>
                    <td>Youth Senate</td>
                    <td><i class="fas fa-check check"></i></td>
                    <td><i class="fas fa-window-close cancel"></i></td>
                </tr>

                <tr>
                    <td>02</td>
                    <td>Jane Doe</td>
                    <td>Dominican</td>
                    <td>Education Senate</td>
                    <td><i class="fas fa-check check"></i></td>
                    <td><i class="fas fa-window-close cancel"></i></td>
                </tr>
            </table>
        </div>
    )
}

export default Candidaterequest
