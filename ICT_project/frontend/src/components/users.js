import { useState,useEffect } from "react"
import './users.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/getUsers')
        .then((result)=>{
            setUsers(result.data)
        })
        .catch((err)=>{
            console.log("error")
        })
    },[])

    const handleDelete = (id)=>{
        console.log(id)
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then((result)=>{
             console.log(result)
            window.location.reload()
        })
        .catch((err)=>{ console.log(err)})
    }
    return (
        <div className="users">
            <Link to='/create' className="btn btn-success yellow-btn" ><b>Add User</b></Link>
            <table className="table table-striped">
                <thead className="table-header">
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>age</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>No data available</td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td  className="action-buttons">
                                    <Link to={`/update/${user._id}`} className="btn btn-success blue-btn">Update</Link>
                                    <button className="btn btn-success red-btn"
                                        onClick={(e) => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export { Users } 