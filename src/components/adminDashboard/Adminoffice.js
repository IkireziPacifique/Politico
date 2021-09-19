import React from 'react'

function Adminoffice() {
    return (
        <div className="main">
            {/* Header */}
            <div className="header">
                <h1>Dashboard</h1><br />
                <a href="">Admin</a> &#5171; <a href="">Dashboard</a>
            </div>

            {/* Form */}
            <div className="form-admin">
                <label>Add new Postion:</label>
                <input type="text" />
                <button>Add Position</button>
            </div>

            {/* Tables */}
            <table>
                <tr>
                    <th>Id</th>
                    <th>Position Name</th>
                    <th>Edit</th>
                    <th>Edit</th>
                </tr>

                <tr>
                    <td>01</td>
                    <td>RPF</td>
                    <td><i class="far fa-edit edit"></i></td>
                    <td><i class="fas fa-trash cancel"></i></td>
                </tr>

                <tr>
                    <td>02</td>
                    <td>Dominican</td>
                    <td><i class="far fa-edit edit"></i></td>
                    <td><i class="fas fa-trash cancel"></i></td>
                </tr>
            </table>
        </div>
    )
}

export default Adminoffice
