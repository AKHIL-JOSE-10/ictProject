import { useEffect } from 'react';
import './update.css'
import {useState} from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';
const UpdateUsers = ()=>{


  const {id} = useParams()  //to extract id from url({id} means destructuring id from url)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [age,setAge] = useState("")
  const navigate=useNavigate()
  
  useEffect(()=>{
    axios.get('http://localhost:3001/getupdateUsers/'+id)
    .then((result)=>{
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)

    })
    .catch((err)=>{
        console.log("error")
    })
},[])

const onSubmit = async(e)=>{
  e.preventDefault()
  const response = await axios.put('http://localhost:3001/updateUser/'+id,{name,email,age})
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
      <h2 style={{ textAlign: "left", marginBottom: "20px" }}>Update User</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="text" className="form-control" id="age" name="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export {UpdateUsers} 