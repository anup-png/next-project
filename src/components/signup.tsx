"use client "
import {useState} from "react"
import axios from "axios"

export default function signup(){

    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    return (
        <div className="flex gap-2 text-black">
            <input type="text" placeholder="email" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            <input type="text" placeholder="username" value={username} onChange={(e)=>{
                setUsername(e.target.value)}}/>
            <input type="password" placeholder="password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <button onClick={
                ()=>{
                     axios.post("http://localhost:3000/api/signin",{email,username,password})
                }
            }>signUp</button>
        </div>
    )
}