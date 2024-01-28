import './create.css'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateUsers = ()=>{

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [age,setAge] = useState("")
  const navigate=useNavigate()


  const onSubmit = async(e)=>{
    e.preventDefault()
    const response = await axios.post('http://localhost:3001/createUser',{name,email,age})
    try{
      console.log(response)
      navigate('/')
    }
    catch(err){
      console.log("error in fetching")
    }
  }
  return (
    <div className="createForm">
      <form onSubmit={onSubmit}>
      <h2 style={{ textAlign: "left", marginBottom: "20px" }}>Add User</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="text" className="form-control" id="age" name="age"  onChange={(e)=>{setAge(e.target.value)}}/>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}

export {CreateUsers} 