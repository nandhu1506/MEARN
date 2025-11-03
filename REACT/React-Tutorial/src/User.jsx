import React from 'react'
import useFetch from './useFetch'

function User() {
    const allusers = useFetch("https://jsonplaceholder.typicode.com/users")
    return (
        <div className='container'>
            <h1 className='text-center'>User List</h1>
            <table className='table table-striped my-5'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allusers?.map((user,index)=>(
                            <tr>
                            <td>{index+1}</td>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.address.street},{user?.address.suite},{user?.address.city},{user?.address.zipcode}</td>
                            <td>{user?.phone}</td>
                            <td>{user?.website}</td>
                            <td>{user?.company.name}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default User