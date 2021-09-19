import React from 'react'

function userprofile() {
    return (
        <div className="main">
            {/* Header */}
            <div className="header">
                <h1>Dashboard</h1>
                <a href="">Admin</a> &#5171; <a href="">Dashboard</a>
            </div>

            <div className="profile">
                <div className="user">
                    <img className='userphoto' src='./img/user.jpg' alt='user' />
                    <h3> Patrick Mbabazi</h3>
                </div>

                <div className="prev">
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>govt-office</th>
                        </tr>

                        <tr>
                            <td>01</td>
                            <td>John Doe</td>
                            <td>Youth Senate</td>
                        </tr>

                        <tr>
                            <td>02</td>
                            <td>Jane Doe</td>
                            <td>Education Senate</td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default userprofile
