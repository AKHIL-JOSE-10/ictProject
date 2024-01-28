import express  from "express";
import { UserModel } from "../models/UsersModel.js";



const router = express.Router()

router.get('/getUsers', async(req,res)=>{
    const result = await UserModel.find()
    try{
        return res.json(result)
    }
    catch(err){
        console.log(err)
    }
})

router.get('/getupdateUsers/:id', async(req,res)=>{
    const _id = req.params.id
    const result = await UserModel.findById({_id})
    try{
        return res.json(result)
    }
    catch(err){
        console.log(err)
    }
})

router.put('/updateUser/:id', (req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name, email:req.body.email,age:req.body.age})
    .then((users)=>{
        res.json(users)
    }).catch((err)=>res.json(err))
} )

router.delete('/deleteUser/:id', (req,res)=>{
    const id = req.params.id
    console.log(id)
    UserModel.findByIdAndDelete({_id:id})
    .then((result)=> res.json(result))
    .catch((err)=>{ console.log(err)})
})

router.post('/createUser', (req,res)=>{
    UserModel.create(req.body)
    .then((result)=>{
        console.log(result)
        return res.json(result)
    }).catch((err)=>{console.log("error")})
})




export {router as UserRouter}